import './ShowDetailComponent.css'

function ShowDetailComponent (){
  return (
    <div className=''>
      <div class="SDC">
        <h4 className='SDC_Head'>APY</h4>
        <h3 className='SDC_Value'>63.44%</h3>
      </div>
      <ul>
        <li>Calculated based on current rates</li>
        <li>All figures are estimates provided for your convenience only, and by no means represent guaranted returns.</li>
      </ul>
    </div>
  );
}

export default ShowDetailComponent;