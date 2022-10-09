import './ShowDetails.css'
import {useState} from 'react'
import ShowDetailComponent from '../ShowDetailComponent/ShowDetailComponent'
import DownArrow from '../../assets/coolicon.png'

function ShowDetails() {
    const [ShowDetails, setShowDetails] = useState(false);
    return (
    <div className='ShowDetailComp'>
        <span className='detail' onClick={()=>setShowDetails(!ShowDetails)}>{`${ShowDetails ? 'Hide details' : 'Show details' }`}
            <img className='ShowDetailsSet' src={DownArrow} alt="no arrow" style={{transform: `rotate(${ShowDetails ? 180 : 0}deg )`}}/>
        </span>
        
        {ShowDetails && <div>
            <ShowDetailComponent/>
        </div>}
    </div>
  );
}

export default ShowDetails;