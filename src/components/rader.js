import React from 'react';

export default (props) => {
    //if the radar is still animating...then we should not allow
    //double radar taps.
    function handleRadarTap(e){
       // props.onTouchTap();
        let cardArray = props.gameArr;
        console.log('radar e',e);
        console.log('rdar ani name',e.animationName);
        console.log('radar type', e.type);
        console.log('eradar targ', e.target);
        if (props.cardsInLine[0] !== null && props.cardsInLine[1] !== null){
            return null;
        }else{
            props.onTouchTap();
        }
    }

    function animationStartRadar(e){

    }
    return(
        <div className="radarContainer">
            <div className="radar" onClick={handleRadarTap}></div>
        </div>
    )
}