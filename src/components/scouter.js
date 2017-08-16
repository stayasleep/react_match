import React from 'react';

export default (props) => {
    return(
        <div className="scouter">
            <div className="scouterText count">{props.power}</div>
        </div>
    )
}