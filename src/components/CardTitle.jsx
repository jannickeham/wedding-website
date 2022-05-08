import '../css/style.css';


function CardTitle(){
    return (
        <>
        <h1 
        className='card-title' 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translate(0, -35%)"
        }}>
            Vi gifter oss
        </h1>
        <h2 
        className='date-title' 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translate(0, -310%)"
        }}>
            12.08.2023
        </h2>
        <div className='line-div'
         >
            <hr className='line'></hr>
        </div>
        
        </>
    )
}

export default CardTitle;