import React from 'react';

export default (props) => {

    console.log('card',props);
    const cardSummary = props.gameArr.map((card, index)=>{

        let disp={};
        let frontClass = "cardFront";
        //props.gameArr[index].flipped ? disp={display:"none"} : disp = {display:"block"};
        props.gameArr[index].flipped ? frontClass = frontClass + " animated rotateOut" : frontClass;
        function handleClick(e){
            //if second card clicked is same as first, dont do anything
            props.firstFlipped === index ? e.preventDefault(): props.onClick(index);
        }
        function transitionEndHandler(e){
            console.log('event',e);
            console.log('event type',e.type);
            props.onTransitionEnd(e);
        }
        function animationEndHandler(e){
            console.log('animo end',e);
            console.log('animo type',e.type);
            props.onAnimationEnd(e);
        }

        return(
            <div key={index} className="cardz">
                <div className="cardBack" style={{background:`url(${props.gameArr[index].src}) center center / contain no-repeat`}} ></div>
                <div onAnimationEnd={animationEndHandler} onClick={handleClick} style={disp} className={frontClass}></div>
            </div>
        )
    });
    return(
        <div className="cardContainer">
            {cardSummary}
        </div>
    )
}