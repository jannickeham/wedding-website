const infoGeneral = 'Annen relevant informasjon i forbildelse med bryllupet vil publiseres her underveis.';
const infoChildren = 'Det blir dessverre ikke anledning for barn under 18 år å delta i bryllupet.';


function Other(){
    return(
        <>
        <div className="info-div">
                <h2 className="info-title">Annet</h2>
                <p className="info-content">{infoGeneral}</p>
            </div>
        </>
    )
}

export default Other;