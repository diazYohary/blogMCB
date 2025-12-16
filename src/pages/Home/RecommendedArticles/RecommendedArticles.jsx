import CardCarousel from "../../../assets/components/CardCarousel/CardCarousel";
import CarouselSkeleton from "../../../assets/components/Skeletons/CarouselSkeleton";
const RecommendedArticles=({
    title="Articulos recomendados",
    data,
    isLoading
})=>{
    return(
        <section className="mcb-flex mcb-pd-30 mcb-ai-c mcb-jc-c">
            <div className="mcb-generic-cont mcb-flex-c mcb-gap-20">
                <h2 className="mcb-fs-32 mqm-txt-c">{title}</h2>
                {isLoading ? 
                (
                    <CarouselSkeleton/>
                ):(
                    <CardCarousel data={data}/>
                )}
            </div>
        </section>
    )
}
export default RecommendedArticles;