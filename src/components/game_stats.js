import React from 'react';

export default (props) => {
    function accuracy(props){
        let matchesMade = props.matched;
        let clicksMade = props.clicks;
        console.log('cm',clicksMade);
        return clicksMade===0 ?  null:  Math.round((matchesMade/clicksMade)*100).toString()+"%";
    }
    function handleResetClick(){
        console.log('button reset clicked',props);
        props.onClick();
    }

    return(
        <div>
            <div>
                Games Played:{props.played}
            </div>
            <div>
                Accuracy:{accuracy(props)}
            </div>
            <div>
                Attempts:{props.clicks===0 ? null: props.clicks }
            </div>
            <button onClick={handleResetClick}>Reset Game</button>
        </div>
    )
}