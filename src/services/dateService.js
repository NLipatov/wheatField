import {useTime} from '../hooks/useTime';

const useDateService = () => {
    const {getCurrentTime, getProgressObject, getManualProgressObject} = useTime();
    const currentTime = () => getCurrentTime();

    return {currentTime, getProgressObject, getManualProgressObject};
}

export default useDateService;