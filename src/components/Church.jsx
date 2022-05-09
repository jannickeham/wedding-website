import '../css/info-pages.css';
import church_image from '../images/botne_kirke.png'

const infoBotne = "Vielsen vil finne sted i Botne Kirke kl. 13:00, i Holmestrand kommune. Her er Ben både døpt og konfirmert, vakre uteområder, og gode parkeringsmuligheter."
const adress ="Kirkeveien 19, 3080 Holmestrand"

function Church(){
    return(
        <>
            <div className="info-div">
                <h2 className="info-title">Kirken</h2>
                <p className="info-content">{infoBotne}</p>
                <p className="info-content">{adress}</p>
                <div className='image-div'>
                    <img src={church_image} className="image" alt="image of church"/>
                </div>
            </div>
            
        </>
    )
}

export default Church;