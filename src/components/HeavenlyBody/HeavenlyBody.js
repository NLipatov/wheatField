import './HeavenlyBody.css';

const HeavenlyBody = ({xCoord, yCoord}) => (    
    <>
        <span className="heavenlyBody" 
        style={{marginLeft: `calc(-75px + ${xCoord}vw)`, 
        marginBottom: `calc(-150px + ${yCoord}vh)`}}>
        </span>
    </>
)


export default HeavenlyBody;