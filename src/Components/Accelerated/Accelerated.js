import './Accelerated.css';

function Accelerated(props) {
  const {accelerate, setAccelerate} = props
  return (
    <div className="">
      <div className='clubboth'>
        <h4>Enable Accelerated APY</h4>
        <input class="switch2" type="checkbox" />
      </div>
      <h5>Select Tier</h5>
      <div className="tags">
        <div className={`tag ${accelerate === 'tier1' ? 'active' : ''}`} onClick={()=>setAccelerate('tier1')}>Tier 1</div>
        <div className={`tag ${accelerate === 'tier2' ? 'active' : ''}`} onClick={()=>setAccelerate('tier2')}>Tier 2</div>
        <div className={`tag ${accelerate === 'tier3' ? 'active' : ''}`} onClick={()=>setAccelerate('tier3')}>Tier 3</div>
        <div className={`tag ${accelerate === 'tier4' ? 'active' : ''}`} onClick={()=>setAccelerate('tier4')}>Tier 4</div>
        <div className={`tag ${accelerate === 'tier5' ? 'active' : ''}`} onClick={()=>setAccelerate('tier5')}>Tier 5</div>
      </div>
      <h5 className='hint'>ROI at Current Rates</h5>
    </div>
  );
}

export default Accelerated;
