import './Header.css'
import cakeIcon from '../../assets/icon-round-512.png'

function Header() {
  return (
    <div className=''>
      <h4 className='heading'> ROI Calculator </h4>
      <div className='heading2'>
				<img src={cakeIcon} alt="image not found" />
        <span className=''>Cake</span>
				<span className=''>USD</span>
      </div>
			<div>
				<input className='display1' defaultValue='2.10000 CAKE'/>
			</div>
			<div className='club'>
				<div className='tags'>
				<div className="tag active">USE BALANCE</div>
          <div className="tag space">$1000</div>
          <div className="tag">$100</div>
				</div>
				<div className='header_rev'>
					<h5 className="">~$20.82</h5>
				</div>
			</div>
			
    </div>
  );
}

export default Header;