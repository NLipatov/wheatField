import './HeavenlyBody.css';

const HeavenlyBody = ({progressObject}) => {
    const getNightHeight = (percentage) => {
        if(percentage > 89){
            if(percentage < 93){
                percentage = 93;
            }
            return Math.round((percentage - 90)/ 10 * 100);
        }
        else{
            if(percentage > 7){
                return Math.round(100-((percentage) / 10) * 100 + 5);
            }
            else{
                return Math.round(100-((percentage) / 10) * 100);
            }
        }
    }


    const getHeavenlyBodyClassName = (dayProgress) => {
        if(dayProgress >= 80 || dayProgress <= 20){
            if(dayProgress >= 90 || dayProgress <= 10){
                if(dayProgress > 89){
                    return{
                        heavenlyBodyClass: 'nightHeavenlyBody',
                        craterClass: 'crater',
                        progress: (progressObject.progress - 90)* 10 / 2,
                        yCoord: getNightHeight((progressObject.progress))
                    }
                }
                else{
                    return{
                        heavenlyBodyClass: 'nightHeavenlyBody',
                        craterClass: 'crater',
                        progress: (progressObject.progress * 10 / 2) + 50,
                        yCoord: getNightHeight(progressObject.progress)
                    }
                }
            }
            else{
                return {
                    heavenlyBodyClass: 'heavenlyBody nightFallHeavenlyBody',
                    craterClass: 'noCreater',
                    progress: progressObject.progress,
                    yCoord: progressObject.yCoord
                };
            }

        }
        else{
            return {
                heavenlyBodyClass: 'heavenlyBody dayHeavenlyBody',
                craterClass: 'noCreater',
                progress: progressObject.progress,
                yCoord: progressObject.yCoord
            }
        }
    }


    const heavenlyBodyState = getHeavenlyBodyClassName(progressObject.progress);

    return(
        <>
            <span className={heavenlyBodyState.heavenlyBodyClass} 
            style={{marginLeft: `calc(-75px + ${heavenlyBodyState.progress}vw)`, 
            marginBottom: `calc(-150px + ${heavenlyBodyState.yCoord}vh)`}}>
            </span>
            <span className={heavenlyBodyState.craterClass}
            style={{marginLeft: `calc(-75px + ${heavenlyBodyState.progress}vw)`, 
            marginBottom: `calc(-150px + ${heavenlyBodyState.yCoord}vh)`}}>
            </span>
        </>
    )

}


export default HeavenlyBody;