
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import './MailStatusBar.css';

export function MailStatusBar() {

    let currentDay = useAppSelector(state => state.player.day_num);
    let money = useAppSelector(state => state.player.money);
    let data = useAppSelector(state => state.player.data);

    return (
        <div className="MailStatusBar">
            <div className='titleWrapper'>
                <h1 style={{ display: 'inline-block', textAlign: 'center' }}> PlentyO'Phish <span style={{ fontWeight: 'normal' }}>| E-Mail Client</span> </h1>
            </div>

            <div>
                {/* spacer */}
            </div>

            <div className='gameState'>
                <h2><span style={{ fontWeight: 'lighter', color: 'rgba(255, 255, 255, 0.8)' }}></span> ${money}</h2>
                <h2><span style={{ fontWeight: 'lighter', color: 'rgba(255, 255, 255, 0.8)' }}> </span> {data} MB</h2>

                <div className='timer'>
                    <img className='calendarIcon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAkklEQVRYhe2W0Q6AIAhFpfX/v1wvuTUivCiOXJw3J5PrFdRSkgTguJgRT28LoMksENEj3zYjkYVdm6yKqyPSDiR4vOaoKoALQbHEqwJm1cKdNWpgFM3JcAe6BPCLpjV2F+AJ1IYcXhutsUa4A5AA65kvVQMi1ud3ZL1wB6Au6HUD6YY1HPB6EyS+7cAv/gNJEs4Jhql38k3hbecAAAAASUVORK5CYII="></img>
                    <h2>{7 - currentDay} Days</h2>
                </div>
            </div>
        </div>
    )
}