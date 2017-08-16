import React from 'react';


export default (props) => {

    function handleRadarTap(){
        props.onTouchTap();
    }

    return(
        <div>
            <div className="radar" onClick={handleRadarTap}></div>
        </div>
    )
}