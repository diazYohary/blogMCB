import RichText from "../assets/components/RichText/RichText.jsx";
import ArticleImage from "../assets/components/ArticleImage/ArticleImage.jsx";
import ArticleVideo from "../assets/components/ArticleVideo/ArticleVideo.jsx";
import PDFViewer from "../assets/components/PDFViewer/PDFViewer.jsx";

export function postRenderer(section, index) {
  switch (section.__component) {
    case "articulos.bloque-texto":
      return <RichText key={index} data={section} />;
    case "articulos.imagen":
      return <ArticleImage key={index} data={section} />;
    case "articulos.video-url":
      return <ArticleVideo key={index} data={section} />;
    case "articulos.documento":
      return <PDFViewer key={index} url={section.file.url} />;
    default:
      return null;
  }
}