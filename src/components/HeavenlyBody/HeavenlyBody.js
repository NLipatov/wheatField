import './HeavenlyBody.css';

const HeavenlyBody = ({xCoord, yCoord, dayProgress}) => {
    const getHeavenlyBodyClassName = (dayProgress) => {
        if(dayProgress > 80 || dayProgress < 20){
            return 'heavenlyBody nightHeavenlyBody';
        }
        else{
            return 'heavenlyBody dayHeavenlyBody';
        }
    }
    const heavenlyBodyClassName = getHeavenlyBodyClassName(dayProgress);

    return(
        <>
            <span className={heavenlyBodyClassName} 
            style={{marginLeft: `calc(-75px + ${xCoord}vw)`, 
            marginBottom: `calc(-150px + ${yCoord}vh)`}}>
            </span>
        </>
    )

}


export default HeavenlyBody;