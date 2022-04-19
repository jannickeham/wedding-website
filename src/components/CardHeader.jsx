import IMG_9193 from '../images/IMG_9193.JPG'

function CardHeader(){
    return (
        <>
        <div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
            <img src={IMG_9193} />
        </div> 
        </>
    )
}

export default CardHeader;