import { articles } from "./sample";
import ArticlePreview from "../../../assets/components/ArticlePreview/ArticlePreview";
const RecommendedArticles=()=>{
    return(
        <>
        <h1 className="mcb-txt-c mcb-fs-32">Nuestras recomendaciones</h1>
        <div className="mcb-flex mcb-ai-c mcb-gap-30">
            <ArticlePreview/>
        </div>
        </>
    )
}
export default RecommendedArticles;