import CardCarousel from "../../../assets/components/CardCarousel/CardCarousel";

const RecommendedArticles=({
    title="Articulos recomendados",
    data
})=>{
    return(
        <section className="mcb-flex mcb-pd-30 mcb-ai-c mcb-jc-c">
            <div className="mcb-generic-cont mcb-flex-c mcb-gap-20">
                <h2 className="mcb-fs-40 mqm-txt-c">{title}</h2>
                <CardCarousel data={data}/>        
            </div>
        </section>
    )
}
export default RecommendedArticles;