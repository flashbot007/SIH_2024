import React from "react";
import './Reasons.css';
import try_img from '../../assets/try-img.png'; 
import play_icon from '../../assets/play-icon.png'; 

const Reasons = ({setPlayState}) => {
    return (
        <div className='try'>
            <div className="try-left">
                <img src={try_img} alt="game" className='try-img' />
                <img src={play_icon} alt="Play Icon" className='play-icon' onClick={()=>{setPlayState(true)}} />
            </div>
            <div className="try-right">
                <h3>ABOUT GAME</h3>
                <h2>AR/VR GAME</h2>
                <p>The AR/VR disaster prevention game offers an immersive experience where users navigate realistic disaster scenarios like earthquakes, floods, and fires. It provides interactive learning, guiding users through essential safety measures. The game enhances engagement by allowing practice in a safe, controlled environment, making disaster preparedness both educational and enjoyable.</p>
            </div>
        </div>
    );
}

export default Reasons;