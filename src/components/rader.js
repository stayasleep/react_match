import React from 'react';
import logo from '../images/dbzside.png';

export default (props) => {

    function handleRadarTap(e){
        if (props.cardsInLine[0] !== null && props.cardsInLine[1] !== null) {
            return null;
        }else if (props.animatingHints){
            e.preventDefault();
        }else{
            props.onTouchTap();
        }
    }

    return(
        <div className="radarContainer">
            <div className="radar" onClick={handleRadarTap} style={{background: `url(${logo}) no-repeat center/contain`}}></div>
        </div>
    )
}