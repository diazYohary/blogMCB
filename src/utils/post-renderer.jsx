import RichText from "../assets/components/RichText/RichText.jsx";

export function postRenderer(section, index) {
  switch (section.__component) {
    case "articulos.bloque-texto":
      return <RichText key={index} data={section} />;
    case "articulos.imagen":
      return (
      <section>
        <img
          key={index}
          src={section.imagen.url}
          className="mcb-mk"
        />
        {section.imagen.caption && <p className="mcb-mk-caption">{section.imagen.caption}</p>}
      </section>
      );
    default:
      return null;
  }
}