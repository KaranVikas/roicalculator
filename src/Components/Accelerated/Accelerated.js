import './Accelerated.css';

function Accelerated() {
  return (
    <div className="">
      <div>
        <h4>enable Accelerated APY</h4>
        <></>
      </div>
      <h5>Select Tier</h5>
      <div className="tags">
        <div className="tag" >Tier 1</div>
        <div className="tag">Tier 2</div>
        <div className="tag">Tier 3</div>
        <div className="tag active">Tier 4</div>
        <div className="tag">Tier 5</div>
      </div>
      <h5 className='hint'>ROI at Current Rates</h5>
    </div>
  );
}

export default Accelerated;
