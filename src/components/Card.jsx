import CardHeader from "./CardHeader";
import Navbar from "./Navbar";
import CardTitle from "./CardTitle";
import Church from "./Church";




function Card(){
    return(
        <> 
        <div style={{
            backgroundColor: "#FCFCFC",
            width: "auto",
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translate(-50%, 0)",
            height: "100%",
            boxShadow:"2px 3px 6px -1px rgba(135,135,135,0.69)",
            overflow: "auto"}} >
            <CardHeader/>
            <CardTitle/>
            <Navbar/>
            <Church/>
            
        </div>
            
        </>
    )
}

export default Card;