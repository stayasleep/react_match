import React from 'react';
import One from '../images/card_0.png';
import Two from '../images/card_1.png';
import Three from '../images/card_2.png';
import Four from '../images/card_3.png'
import Five from '../images/card_4.png'
import Six from '../images/card_5.png'
import Seven from '../images/card_6.png'
import Eight from '../images/card_7.png'
import Nine from '../images/card_8.png';

//i can go through each card being made
//pick a number 1-18
//

export default (props) => {
    const picArray = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
    let assignPic = [...picArray,...picArray];
    let randomNumber = Math.floor(Math.random()*assignPic.length);
    let thisCardsImage = assignPic[randomNumber];
    assignPic.splice(randomNumber,1);

    console.log('card',props);
    const cardSummary = props.gameArr.map((card, index)=>{
        //mix the array for a random bg image
        // let randomNumber = Math.floor(Math.random()*assignPic.length);
        // let thisCardsImage = assignPic[randomNumber];
        // assignPic.splice(randomNumber,1);
        //give each card a handle so we can lift state up and pass back props
        function handleClick(e){
            //if second card clicked is same as first, dont do anything
            props.firstFlipped === index ? e.preventDefault(): props.onClick(index);
            console.log('card index',index);
        }

        return(
            <div key={index} className="cardz">
                <div className="cardBack" style={{background:`url(${thisCardsImage}) no-repeat center`,backgroundSize:"contain"}} ></div>
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