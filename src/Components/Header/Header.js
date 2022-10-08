import './Header.css'
import Icon from '../../assets/icon.png'
import cakeIcon from '../../assets/icon-round-512.png'

function Header(props) {
	const {balance, setBalance} = props
  return (
    <div className=''>
        <div className='HeaderClub'>
	    <h4 className='heading'> ROI Calculator </h4>
	    <img className="CloseImg" src={Icon} alt="No Close" />
		</div>
      <div className='heading2'>
				<img src={cakeIcon} alt="cake"  />
        		<span className=''>Cake</span>
				<input className="switch" type="checkbox" />
				<span className=''>USD</span>
      </div>
			<div>
				<input className='display1' defaultValue='2.10000 CAKE'/>
			</div>
			<div className='club'>
				<div className='tags'>
				<div className={`tag ${balance == 'useBalance' ? 'active' : ''}`} onClick={()=>setBalance('useBalance')}>USE BALANCE</div>
          <div className={`tag space ${balance == '1000' ? 'active' : ''}`} onClick={()=>setBalance('1000')}>$1000</div>
          <div className={`tag ${balance == '100' ? 'active' : ''}`} onClick={()=>setBalance('100')}>$100</div>
				</div>
				<div className='header_rev'>
					<h5 className="">~$20.82</h5>
				</div>
			</div>
			
    </div>
  );
}

export default Header;