import './SecondDisplay.css'
import Vector from '../../assets/Vector.png'
import Vector1 from '../../assets/Vector1.png'


function SecondDisplay(props) {
  const {apply, setApply} = props
  return (
    <div className='SecondDis-Container'>
      <div className="InputDisplay">
        <img className={`Pencil ${apply === 'active' ? 'check' : '' }`} src={apply === 'active' ? Vector1 : Vector} alt="pencil"/>
        <input className={`display1 ${apply === 'active' ? 'activate' : '' }`} disabled type="text" defaultValue='100.0 USD' />
      </div>
      <h5 className='hint'>~3CAKE + 10 DON</h5>
      <div className="buttons">
        <button className="button" onClick={()=>setApply('active')}>Apply</button>
        <button className='button inactive'>Cancel</button>
      </div>
    </div>
  );
}

export default SecondDisplay;