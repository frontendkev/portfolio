import {useLocation} from "react-router-dom";
import {useEffect} from "react";


export default function ScrollUp () {
       const location = useLocation()
    function scrollToTop () {
               return window.scrollTo(0,0)
    }
    useEffect(() => {
            scrollToTop()
    }, [location.pathname])

    return;
}
