export const useTime = () => {
    const getCurrentTime = () => "15:00";

    const secondsSinceMidnight = () => {
        const newDate = new Date();
        const secondsSinceMidnight = (newDate.getTime() - newDate.setHours(0, 0, 0)) / 1000;
        return secondsSinceMidnight;
    }

    const getDayPercentage = () => {
        const secondsPassed = secondsSinceMidnight();
        return Math.round((secondsPassed / 86400) * 100);
    }

    const getHeightPercentageBasedOnPrecentage = () => {
        const percentage = getDayPercentage();
        if(percentage < 51){
            return Math.round((percentage / 50) * 100);
        }
        else{
            return Math.round((1 - ((percentage / 50) - 1)) * 100)
        }
    }

    return {getCurrentTime, secondsSinceMidnight, getDayPercentage, getHeightPercentageBasedOnPrecentage};
}