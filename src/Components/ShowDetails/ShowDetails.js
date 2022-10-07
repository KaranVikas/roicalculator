import './ShowDetails.css'
import {useState} from 'react'

function ShowDetails() {
    const [ShowDetails, setShowDetails] = useState(false);
    return (
    <div className=''>
        <h5 className='detail' onClick={()=>setShowDetails(!ShowDetails)}>Show details</h5>
        
        {ShowDetails && <div>
            abcd 
        </div>}
    </div>
  );
}

export default ShowDetails;