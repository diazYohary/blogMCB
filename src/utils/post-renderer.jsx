import RichText from "../assets/components/RichText/RichText.jsx";
import ArticleImage from "../assets/components/ArticleImage/ArticleImage.jsx";
import ArticleVideo from "../assets/components/ArticleVideo/ArticleVideo.jsx";

export function postRenderer(section, index) {
  switch (section.__component) {
    case "articulos.bloque-texto":
      return <RichText key={index} data={section} />;
    case "articulos.imagen":
      return <ArticleImage key={index} data={section} />;
    case "articulos.video-url":
      return <ArticleVideo key={index} data={section} />;
    default:
      return null;
  }
}