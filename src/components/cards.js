import React from 'react';

export default (props) => {

    console.log('card',props);
    const cardSummary = props.gameArr.map((card, index)=>{
        let disp={};
        props.gameArr[index].flipped ? disp={display:"none"} : disp = {display:"block"};
        function handleClick(e){
            //if second card clicked is same as first, dont do anything
            props.firstFlipped === index ? e.preventDefault(): props.onClick(index);
            console.log('card index',index);
        }

        return(
            <div key={index} className="cardz">
                <div className="cardBack" style={{background:`url(${props.gameArr[index].src}) center center / contain no-repeat`}} ></div>
                <div onClick={handleClick} style={disp} className="cardFront"></div>
            </div>
        )
    });
    return(
        <div className="cardContainer">
            {cardSummary}
        </div>
    )
}