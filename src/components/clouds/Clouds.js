import './clouds.css';

const Clouds = ({dayProgress}) => {
    const getCloudsClassName = (dayProgress) => {
        if(dayProgress >= 80 || dayProgress <= 20){
            if(dayProgress >= 90 || dayProgress <= 10){
                return 'deepNight';
            }
            return 'nightFall';
        }
        else{
            return 'day';
        }
    }
    const cloudsClassName = getCloudsClassName(dayProgress);

    return (
        <div id="background-wrap" className={cloudsClassName}>
            <div className="x1">
                <div className="cloud"></div>
            </div>

            <div className="x2">
                <div className="cloud"></div>
            </div>

            <div className="x3">
                <div className="cloud"></div>
            </div>

            <div className="x4">
                <div className="cloud"></div>
            </div>

            <div className="x5">
                <div className="cloud"></div>
            </div>
        </div>
    )
}

export default Clouds;