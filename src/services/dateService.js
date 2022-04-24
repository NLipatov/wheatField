import {useTime} from '../hooks/useTime';

const useDateService = () => {
    const {getCurrentTime, secondsSinceMidnight, getDayPercentage, getHeightPercentageBasedOnPrecentage} = useTime();
    const currentTime = () => getCurrentTime();
    const secondsSinceMidnightTime = () => secondsSinceMidnight();
    const dayPercentage = () => getDayPercentage();
    const heightPercentage = () => getHeightPercentageBasedOnPrecentage();

    return {currentTime, secondsSinceMidnightTime, dayPercentage, heightPercentage};
}

export default useDateService;