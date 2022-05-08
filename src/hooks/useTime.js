export const useTime = () => {
    const getCurrentTime = () => {
        const now = new Date();
        const current = now.getHours() + ':' + now.getMinutes();
        return current;
    }

    const secondsSinceMidnight = () => {
        const newDate = new Date();
        const secondsSinceMidnight = (newDate.getTime() - newDate.setHours(0, 0, 0)) / 1000;
        return secondsSinceMidnight;
    }

    const getDayPercentage = () => {
        const secondsPassed = secondsSinceMidnight();
        return Math.round((secondsPassed / 86400) * 100);
    }

    const getHeightPercentageBasedOnPrecentage = (percentage) => {
        if(percentage < 51){
            return Math.round((percentage / 50) * 100);
        }
        else{
            return Math.round((1 - ((percentage / 50) - 1)) * 100)
        }
    }

    const getProgressObject = () => {
        const progress = getDayPercentage();
        const yCoord = getHeightPercentageBasedOnPrecentage(progress);
        return {
            progress: progress,
            yCoord: yCoord
        }
    }

    const getManualProgressObject = (dayprogress) => {
        const progress = dayprogress;
        const yCoord = getHeightPercentageBasedOnPrecentage(dayprogress);
        return {
            progress: progress,
            yCoord: yCoord
        }
    }

    return {getCurrentTime, secondsSinceMidnight, getDayPercentage, getHeightPercentageBasedOnPrecentage, getProgressObject, getManualProgressObject};
}