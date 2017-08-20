import React from 'react';

export default (props) => {

    const cardSummary = props.gameArr.map((card, index)=>{

        let frontClass = "cardFront";
        // eslint-disable-next-line
        props.gameArr[index].flipped ? frontClass = frontClass + " animated rotateOut" : frontClass;
        // eslint-disable-next-line
        props.gameArr[index].hint ? frontClass = frontClass + " animated tada" : frontClass;
        function handleClick(e){
            //if second card clicked is same as first, dont do anything
            console.log('handle click',e.type);
            animationStartHandler(e);
            if(props.gameArr[index].hint) return e.preventDefault();
            props.gameArr[index].flipped ? e.preventDefault(): props.onClick(index);
        }

        function animationEndHandler(e){
            console.log('end ani name',e.animationName);
            console.log('end type',e.type);
            console.log('end e targ', e.target);
            props.onAnimationEnd(e.animationName, index);
        }
        function animationStartHandler(e){
            console.log('animation e',e);
            console.log('start type',e.type);
            console.log('start name',e.animationName);
            console.log('start target',e.target);
        }

        return(
            <div key={index} className="cardz">
                <div className="cardBack" style={{background:`url(${props.gameArr[index].src}) center center / contain no-repeat`}} ></div>
                <div onAnimationEnd={animationEndHandler} onAnimationStart={animationStartHandler} onClick={handleClick} className={frontClass}></div>
            </div>
        )
    });
    return(
        <div className="cardContainer">
            {cardSummary}
        </div>
    )
}