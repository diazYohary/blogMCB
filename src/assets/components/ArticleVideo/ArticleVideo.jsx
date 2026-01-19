export default function ArticleVideo({ data }) {
  const url = data.url;
  const videoId = url.match(/(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId?.[1]}` : null;
  return embedUrl ? (
    <div className="mcb-mk-video-container">
      <iframe
        className="mcb-mk-video"
        src={embedUrl}
        title={data.titulo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ) : <p className="mcb-mk"> <b>{data.titulo}</b> Url de video mal formada, por favor verifica la URL.</p>;
}
