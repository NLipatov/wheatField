import './TimeBadge.css';

const TimeBadge = ({CurrentTime}) => {
    return (
        <div className='timeBadgeBody'>
            <span className='timeSpan'>{CurrentTime}</span>
        </div>
    )
}

export default TimeBadge;