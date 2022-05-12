import location_image from "../images/tuftegard.jpg";

const infoTufte =
  "Lokasjon for middag og fest etter vielsen, vil være på Tufte Gård i Horten Kommune. Det er ca. 15-20 minutters kjøretur fra Botne Kirke. Vi har leid lavvoen, med rustikke toner, bar, dansegulv, og frodig, privat uteområde. Mer informasjon kommer!";
const adress = "Tufteveien 5, 3180 Nykirke";

function Location() {
  return (
    <>
      <div className="info-div">
        <h2 className="info-title">Lokalet</h2>
        <p className="info-content">{infoTufte}</p>
        <div className="link-div">
          <a
            className="link"
            href="https://www.tuftegard.no/lokaler"
            target="_blank"
          >
            Les mer her på Tufte Gårds hjemmeside
          </a>
        </div>
        <p className="info-content">{adress}</p>
        <div className="image-div">
          <img src={location_image} className="image" alt="image of location" />
        </div>
      </div>
    </>
  );
}

export default Location;
