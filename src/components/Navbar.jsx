import '../css/navbar.css';
import wedding_ring from '../images/wedding_ring.png';



function Navbar(){
    return(
        <>
        <div className='navbar-div'>
            <ul className="navbar-list">
                <li className="list-item">Kirken</li>
                <li className="list-item">Lokalet</li>
                <li className='list-item-icon'><img src={wedding_ring} className="wedding-ring-icon"/></li>
                <li className="list-item">Overnatting</li>
                <li className="list-item">Annet</li>
            </ul>
        </div>
        
        </>
    )
}

export default Navbar;