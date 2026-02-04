import { useState, useEffect } from 'react';

const BREAKPOINTS = {
    XL: 1600, 
    LG: 1400, 
    MD: 950, 
    SM: 500 
};

const getBreakpoint = (width) => {
    if (width > BREAKPOINTS.XL) return 'XL'; //4 items
    if (width > BREAKPOINTS.LG) return 'LG'; //3irems
    if (width > BREAKPOINTS.MD) return 'MD'; //2items
    if (width > BREAKPOINTS.SM) return 'SM';
    return 'XS'; 
};

const useBreakpoint = () => {
    
    const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 1920; 
    const [currentBreakpoint, setCurrentBreakpoint] = useState(getBreakpoint(initialWidth));

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setCurrentBreakpoint(getBreakpoint(window.innerWidth));
        };
        
        window.addEventListener('resize', handleResize);
        
        handleResize(); 
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return currentBreakpoint;
};

export default useBreakpoint;