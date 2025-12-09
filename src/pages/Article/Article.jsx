import { useState, useParams } from "react";
import Title from "./Title/Title";
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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi recusandae expedita ipsam culpa tenetur neque repellat illo quasi est? Tempore corporis rem repudiandae facere deserunt aut adipisci, facilis cupiditate suscipit!</p>
        </>
    )
}
export default Article;