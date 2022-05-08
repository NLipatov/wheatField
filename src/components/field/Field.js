import './field.css';
import wheatField from './pngegg.png';
import React, {useEffect} from 'react';



const Field = ({dayProgress}) => {
    const getWheatClassName = (dayProgress) => {
        if(dayProgress > 80 || dayProgress < 20){
            return 'wheatField nightField';
        }
        else{
            return 'wheatField dayField';
        }
    }



    const wheatClassName = getWheatClassName(dayProgress);
    return (
        <>
        <img src={wheatField} 
        className={wheatClassName}
        alt="wheat field"
        />
    </>
    )
}





export default Field;