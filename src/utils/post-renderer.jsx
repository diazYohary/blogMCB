import RichText from "../assets/components/RichText/RichText.jsx";

export function postRenderer(section, index) {
  switch (section.__component) {
    case "articulos.bloque-texto":
      return <RichText key={index} data={section} />;
    case "articulos.imagen":
      return (
      <>
      <img
        key={index}
        src={section.imagen.url}
        className=""
          />
          {section.imagen.caption && <p className="mcb-mk mcb-caption">{section.imagen.caption}</p>}
      </>
      );
    default:
      return null;
  }
}