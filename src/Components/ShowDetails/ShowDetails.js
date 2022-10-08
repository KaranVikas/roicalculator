import './ShowDetails.css'
import {useState} from 'react'
import ShowDetailComponent from '../ShowDetailComponent/ShowDetailComponent'
import DownArrow from '../../assets/coolicon.png'

function ShowDetails() {
    const [ShowDetails, setShowDetails] = useState(false);
    return (
    <div className=''>
        <span className='detail' onClick={()=>setShowDetails(!ShowDetails)}>Show details
            <img className='ShowDetailsSet' src={DownArrow} alt="no arrow"/>
        </span>
        
        {ShowDetails && <div>
            <ShowDetailComponent/>
        </div>}
    </div>
  );
}

export default ShowDetails;