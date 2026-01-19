export default function ArticleImage({ data }) {
  return <section>
    <img
      src={data.imagen.url}
      className="mcb-mk" />
    {data.imagen.caption && <p className="mcb-mk-caption">{data.imagen.caption}</p>}
  </section>;
}
