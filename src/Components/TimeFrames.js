import './TimeFrames.css';

function TimeFrames(props) {
  const { timeFrame, setTimeFrames } = props
  return (
    <div className="TimeFrames-container">
        <h5 >Timeframe</h5>
        <div className="tags">
            <div className={`tag ${timeFrame === '1day' ? 'active' : ''}`} onClick={()=>setTimeFrames('1day')}>1 Day</div>
            <div className={`tag ${timeFrame === '7day' ? 'active' : ''}`} onClick={()=>setTimeFrames('7day')}>7 Days</div>
            <div className={`tag ${timeFrame === '30day' ? 'active' : ''}`} onClick={()=>setTimeFrames('30day')}>30 Days</div>
            <div className={`tag ${timeFrame === '1year' ? 'active' : ''}`} onClick={()=>setTimeFrames('1year')}>1 Year</div>
            <div className={`tag ${timeFrame === '5year' ? 'active' : ''}`} onClick={()=>setTimeFrames('5year')}>5 Years</div>
        </div>
    </div>
  );
}

export default TimeFrames;
