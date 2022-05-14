import "./LoadingScreen.css";
import { useState, useEffect } from "react";

const LoadingScreen = ({hideLoadingScreen}) => {
    const [getOpacity, setOpacity] = useState(1);

    useEffect(()=>{
        hideLoadingScreen.current = setOpacityParamToZero
    }, [])

    const setOpacityParamToZero = () => {
        setOpacity(0);
    }

    return(
        <div className="LoadingScreen" style={{opacity: getOpacity}}>
            <span>
                Please wait a bit, we're loading...
            </span>
        </div>
    )
}

export default LoadingScreen;