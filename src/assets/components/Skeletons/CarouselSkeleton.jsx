import CardSkeleton from "./CardSkeleton";
import useBreakpoint from "../CardCarousel/useBreakpoint";

const CarouselSkeleton=()=>{
    const currentBreakpoint = useBreakpoint();

    const cardSkeletonRender=(breakpoint)=>{
        switch(breakpoint){
            case 'XL':
                return 4;
            case 'LG':
                return 3;
            case 'MD':
                return 2;
            case 'SM':
                return 1;
            case 'XS':
            default:
                return 1;
        }
    }
    return(
        <div className="mcb-flex mcb-gap-20 mcb-jc-sb">
            {Array.from({ length: cardSkeletonRender(currentBreakpoint) }).map((_, index) => (
                <CardSkeleton key={index}/>
            ))}
        </div>
    )
}
export default CarouselSkeleton;