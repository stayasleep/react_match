import React from 'react';

export default (props) => {

    const cardSummary = props.gameArr.map((card, index)=>{

        let disp={};
        let frontClass = "cardFront";
        //props.gameArr[index].flipped ? disp={display:"none"} : disp = {display:"block"};
        props.gameArr[index].flipped ? frontClass = frontClass + " animated rotateOut" : frontClass;
        props.gameArr[index].hint ? frontClass = frontClass + " animated tada" : frontClass;
        function handleClick(e){
            //if second card clicked is same as first, dont do anything
            props.firstFlipped === index ? e.preventDefault(): props.onClick(index);
        }

        function animationEndHandler(e){
            console.log('animo end',e.animationName);
            console.log('animo type',e.type);
            props.onAnimationEnd(e.animationName, index);
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