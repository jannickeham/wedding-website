import header_image from '../images/header_image.jpg'

function CardHeader(){
    return (
        <>
        <div>
            <img src={header_image} style={{zIndex: "2"}} />
        </div> 
        </>
    )
}

export default CardHeader;