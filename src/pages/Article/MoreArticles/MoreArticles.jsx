import CardCarousel from "../../../assets/components/CardCarousel/CardCarousel";

const MoreArticles=({
    articles=[]
    
})=>{
    return(
        <section className="mcb-pd-30 mcb-flex-c mcb-gap-20">
            <h1 className="mcb-txt-c">Otros artículos que te podrían interesar</h1>
            <CardCarousel data={articles}/>
        </section>
    )
}
export default MoreArticles;