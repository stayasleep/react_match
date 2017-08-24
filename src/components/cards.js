import React from 'react';
import back from '../images/card_back.jpg';

export default (props) => {

    const cardSummary = props.gameArr.map((card, index)=>{

        let frontClass = "cardFront";
        // eslint-disable-next-line
        props.gameArr[index].flipped ? frontClass = frontClass + " animated rotateOut" : frontClass;
        // eslint-disable-next-line
        props.gameArr[index].hint ? frontClass = frontClass + " animated tada" : frontClass;
        function handleClick(e){
            animationStartHandler(e);
            if(props.gameArr[index].hint) return e.preventDefault();
            props.gameArr[index].flipped ? e.preventDefault(): props.onClick(index);
        }

        function animationEndHandler(e){
            props.onAnimationEnd(e.animationName, index);
        }
        function animationStartHandler(e){

        }

        return(
            <div key={index} className="cardz">
                <div className="cardBack" style={{background:`url(${props.gameArr[index].src}) center center / contain no-repeat`}} ></div>
                <div style={{background:`url(${back}) center center / contain no-repeat`}} onAnimationEnd={animationEndHandler} onAnimationStart={animationStartHandler} onClick={handleClick} className={frontClass}></div>
            </div>
        )
    });
    return(
        <div className="cardContainer">
            {cardSummary}
        </div>
    )
}