import './SecondDisplay.css'
import Vector from '../../assets/Vector.png'

function SecondDisplay() {
  return (
    <div className=''>
      <div className="InputDisplay">
        <img className='Pencil' src={Vector} alt="pencil"/>
        <input className='display1' disabled type="text" defaultValue='100.0 USD' />
      </div>
      <h5 className='hint'>~3CAKE + 10 DON</h5>
      <div className="buttons">
        <button className='button '>Apply</button>
        <button className='button inactive'>Cancel</button>
      </div>
    </div>
  );
}

export default SecondDisplay;