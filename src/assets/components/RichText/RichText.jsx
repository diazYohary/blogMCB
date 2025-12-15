/* eslint-disable no-unused-vars */
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";


export default function RichText({ data }) {
  return (
    <section className="">
      <Markdown children={data.contenido} remarkPlugins={[remarkGfm]} 
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="mcb-mk" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="mcb-mk" id={props.children.replace(/\s+/g, '-').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")} {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="mcb-mk" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="mcb-mk" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="mcb-mk" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="mcb-mk" {...props} />
        ),
        pre: ({ node, ...props }) => (
          <pre className="mcb-card mcb-mk" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="mcb-mk" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="mcb-mk" {...props} />
        ),
      }}/>
    </section>
  );
}
