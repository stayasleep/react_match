import React from 'react';

export default (props) => {
    function accuracy(props){
        let matchesMade = props.matched;
        let clicksMade = props.clicks;
        console.log('cm',clicksMade);
        return clicksMade===0 ?  null:  Math.round((matchesMade/clicksMade)*100).toString()+"%";
    }
    // function handleRadarTap(){
    //     props.onTouchTap();
    // }
    function handleResetClick(){
        console.log('button reset clicked',props);
        props.onClick();
    }
    console.log('butn props',props);
    //if both cards are being checked...we disable reset action until afterwards
    let [cardA,cardB]=props.cardsInLine;
    let isDisabled = false;
    cardA !== null && cardB !== null ? isDisabled=!isDisabled : isDisabled;

    return(
        <div className="headers">
            <div className="playedContainer col-xs-3 col-sm-3">
                Games Played: {props.played}
            </div>
            <div className="accuracyContainer col-xs-3 col-sm-3">
                Accuracy: {accuracy(props)}
            </div>
            <div className="attemptsContainer col-xs-3 col-sm-3">
                Attempts: {props.clicks===0 ? null: props.clicks }
            </div>
            <div className="btnContainer col-xs-3 col-sm-3">
                <button className="btn btn-secondary resetBtn" disabled={isDisabled} onClick={handleResetClick}>Reset Game</button>
            </div>
        </div>
    )
}