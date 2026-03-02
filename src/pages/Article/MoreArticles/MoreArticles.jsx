import CardCarousel from "../../../assets/components/CardCarousel/CardCarousel";

const MoreArticles=({
    articles=[]
})=>{

    if(!articles.length>0){
        return
    }
    return(
        <section className="mcb-pd-30 mcb-flex-c mcb-gap-20">
            <h1 className="mcb-txt-c">MCBrokers recomienda</h1>
            <CardCarousel data={articles}/>
        </section>
    )
}
export default MoreArticles;