import { useState, useParams } from "react";
import Title from "./Title/Title";
import Body from "./Body/Body";
import Author from "./Author/Author";

const Article=()=>{
    // const { articleId } = useParams();
    const [articleData, setArticleData] = useState(null);

    // useEffect(() => {
    //     if (articleId) {
    //         console.log("Cargando contenido para ID:", articleId);
    //         setArticleData({ title: `Artículo Dinámico #${articleId}`, content: "Contenido..." });
    //     }
    // }, [articleId]);
    return(
        <>
        <Title/>
        <Body/>
        <Author/>
        </>
    )
}
export default Article;