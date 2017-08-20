import React from 'react';

export default (props) => {
    function accuracy(props){
        let matchesMade = props.matched;
        let attempts = props.clicks;
        return attempts === 0 ?  null:  Math.round((matchesMade/attempts)*100).toString()+"%";
    }

    function handleResetClick(){
        console.log('button reset clicked',props);
        props.onClick();
    }
    console.log('butn props',props);
    //if both cards are being checked...we disable reset action until afterwards
    let [cardA,cardB]=props.cardsInLine;
    let isDisabled = false;
    // eslint-disable-next-line
    cardA !== null && cardB !== null ? isDisabled=!isDisabled : isDisabled;

    return(
        <div className="headers">
            <div className="playedContainer col-xs-4 col-sm-3">
                Games Played: {props.played}
            </div>
            <div className="accuracyContainer col-xs-4 col-sm-3">
                Accuracy: {accuracy(props)}
            </div>
            <div className="attemptsContainer col-xs-4 col-sm-3">
                Attempts: {props.clicks===0 ? null: props.clicks }
            </div>
            <div className="btnContainer col-xs-12 col-sm-3">
                <button className="btn btn-secondary btn-lg resetBtn" disabled={isDisabled} onClick={handleResetClick}>Reset Game</button>
            </div>
        </div>
    )
}