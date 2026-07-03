import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchAPI } from "../../utils/fetch-api";
import { STRAPI_API_TOKEN } from "../../../config";

// ~ styles
import PageRenderer from "../../assets/components/PageRenderer/PageRenderer";
import LoadingScreen from '../../assets/components/LoadingScreen/LoadingScreen'
import ULR_PARAMS_OBJECT from "../../hooks/useUrlParamsObject";
import './Home.scss'

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [pageData, setPageData] = useState(null);
    const [searchParams] = useSearchParams();
    const previewStatus = searchParams.get('status');

    const fetchLandingBlogData = useCallback(async () => {

        try {
            const token = STRAPI_API_TOKEN;
            const options = { headers: { Authorization: `Bearer ${token}` } };
            const params = {
                ...ULR_PARAMS_OBJECT,
                ...(previewStatus === 'draft' && { status: 'draft' }),
            };

            const landingRes = await fetchAPI('/paginas', params, options);
            // console.log('Landing Blog Data:', landingRes);
            if (landingRes.data.length > 0) {
                setPageData(landingRes.data[0]);
            }
        } catch (error) {
            console.error(error);
        }
    }, [previewStatus]);


    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await Promise.all([
                fetchLandingBlogData()
            ]);
            setLoading(false);
        };

        loadData();
    }, [fetchLandingBlogData]);

    if(!pageData) return <LoadingScreen/>

    return (
        <>
        {pageData && pageData.bloques && pageData.bloques.map((seccion, index) => (
            <PageRenderer
                key={index}
                bloque={seccion}
            />
        ))}
        </>
    )
}
export default Home;