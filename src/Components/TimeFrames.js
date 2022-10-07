import './TimeFrames.css';

function TimeFrames() {
  return (
    <div className="TimeFrames-container">
        <h5 >Timeframe</h5>
        <div className="tags">
            <div className="tag active" >1 Day</div>
            <div className="tag">7 Days</div>
            <div className="tag">30 Days</div>
            <div className="tag">1 Year</div>
            <div className="tag">5 Years</div>
        </div>
    </div>
  );
}

export default TimeFrames;
