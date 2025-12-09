import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbArrow=()=>(
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L6 5.99999L1 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Breadcrumbs=({crumbs})=>{
    return(
        <div className="mcb-flex mcb-ai-c mcb-gap-5">
            {crumbs.map((crumb, crumbIndex)=>{
                const isLast = crumbIndex === crumbs.length - 1;
                return(
                    <React.Fragment key={crumbIndex}>
                        {isLast ? (
                            <span>{crumb.label}</span>
                        ) : (
                            <Link to={crumb.url} className="mcb-white-link">{crumb.label}</Link>
                        )}

                        {!isLast && <BreadcrumbArrow/>}
                    </React.Fragment>
                )
            })}
        </div>
    )
}
export default Breadcrumbs;