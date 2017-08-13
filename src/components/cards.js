import React from 'react';

export default (props) => {
    // const picArray = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
    // let assignPic = [...picArray,...picArray];
    // let randomNumber = Math.floor(Math.random()*assignPic.length);
    // let thisCardsImage = assignPic[randomNumber];
    // assignPic.splice(randomNumber,1);

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
                <div className="cardBack" style={{background:`url(${props.gameArr[index].src}) no-repeat center`,backgroundSize:"contain"}} ></div>
                <div onClick={handleClick} className="cardFront"></div>
            </div>
        )
    });
    return(
        <div className="cardContainer">
            {cardSummary}
        </div>
    )
}