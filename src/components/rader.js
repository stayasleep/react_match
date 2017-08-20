import React from 'react';

export default (props) => {
    //if the radar is still animating...then we should not allow
    //double radar taps.
    function handleRadarTap(e){
        console.log('radar e',e);
        console.log('rdar ani name',e.animationName);
        console.log('radar type', e.type);
        console.log('eradar targ', e.target);
        if (props.cardsInLine[0] !== null && props.cardsInLine[1] !== null) {
            return null;
        }else if(props.animatingHints){
            console.log('tru chains');
            e.preventDefault();
        }else{
            props.onTouchTap();
        }
    }

    return(
        <div className="radarContainer">
            <div className="radar" onClick={handleRadarTap}></div>
        </div>
    )
}