import React from 'react';

export default (props) => {
    console.log('card',props);
    const cardSummary = props.gameArr.map((card, index)=>{
        //give each card a handle so we can lift state up and pass back props
        function handleClick(e){
            //if second card clicked is same as first, dont do anything
            props.firstFlipped === index ? e.preventDefault(): props.onClick(index);
            console.log('card index',index);
        }

        return(
            <div key={index} className="cardz">
                <div onClick={handleClick} className="cardFront"></div>
                <div className="cardBack"></div>
            </div>
        )
    });
    return(
        <div className="cardContainer">
            {cardSummary}
        </div>
    )
}