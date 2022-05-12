import header_image from "../images/header_image.jpg";

function CardHeader() {
  return (
    <>
      <div className={"header-div"}>
        <img className="header-image" src={header_image} />
      </div>
    </>
  );
}

export default CardHeader;
