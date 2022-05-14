import './field.css';
import wheatField from './pngegg.png';
import React, {useEffect, useRef} from 'react';



const Field = ({dayProgress, fieldImageLoaded}) => {
    const getWheatClassName = (dayProgress) => {
        if(dayProgress > 80 || dayProgress < 20){
            return 'wheatField nightField';
        }
        else{
            return 'wheatField dayField';
        }
    }

    const fieldImage = useRef();

    useEffect(()=>{
        if(fieldImage.current.complete){
            fieldImageLoaded();
        }
    }, [])



    const wheatClassName = getWheatClassName(dayProgress);
    return (
        <>
        <img src={wheatField} 
        className={wheatClassName}
        alt="wheat field"
        ref={fieldImage}
        onLoad={fieldImageLoaded}
        />
    </>
    )
}





export default Field;