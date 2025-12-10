import CardCarousel from "../../../assets/components/CardCarousel/CardCarousel";

const RecommendedArticles=()=>{
    return(
        <section className="mcb-flex mcb-pd-30 mcb-ai-c mcb-jc-c">
            <div className="mcb-generic-cont mcb-flex-c mcb-gap-20">
                <h2 className="mcb-fs-40 mqm-txt-c">Nuestras recomendaciones</h2>
                <CardCarousel/>        
            </div>
        </section>
    )
}
export default RecommendedArticles;