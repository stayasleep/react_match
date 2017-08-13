import React,{ Component } from 'react';
import Cards from './cards';
import GameStats from './game_stats';
import One from '../images/card_0.png';
import Two from '../images/card_1.png';
import Three from '../images/card_2.png';
import Four from '../images/card_3.png'
import Five from '../images/card_4.png'
import Six from '../images/card_5.png'
import Seven from '../images/card_6.png'
import Eight from '../images/card_7.png'
import Nine from '../images/card_8.png';

class CardBoard extends Component{
    constructor(props){
        super(props);
        this.state={
            totalMatches: 9,
            matched: 0,
            gamesPlayed: 0,
            clicks: 0,
            cardArr : Array(18).fill(undefined),
            fFLipped: null,
            sFLipped: null,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    componentWillMount(){
        console.log('cardboard will mount');
        this.generateRandomCards();
    }

    generateRandomCards(){
        //pics
        const picArray = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
        let assignPic = [...picArray,...picArray];

        const cardArrRandom = this.state.cardArr.slice(); //avoid direct mutation
        const cardObj =cardArrRandom.map((card,index) =>{
            console.log('card is gener',card);
            let randomNumber = Math.floor(Math.random()*assignPic.length);
            let thisCardsImage = assignPic[randomNumber];
            assignPic.splice(randomNumber,1);
            return(
                {src: thisCardsImage , flipped: false, matched: false}
            )
        });
        this.setState({cardArr: cardObj});
    }

    handleClick(index){
        console.log('card was clicked',index);
        const cardArrState = this.state.cardArr.slice();

        if (this.state.fFLipped===null){
            cardArrState[index].flipped = !cardArrState[index].flipped;
            this.setState({
                fFLipped: index,
                cardArr: cardArrState
            })
        } else {
            console.log('did it come in second');
            cardArrState[index].flipped = !cardArrState[index].flipped;
            this.setState({sFLipped: index,cardArr: cardArrState });
            //do they match
            let clickCounter = this.state.clicks;
            let firstCard = cardArrState[this.state.fFLipped];
            let secondCard = cardArrState[index];

            if (firstCard.src ===secondCard.src){
                //check if we win the game
            } else {
               //so we didnt match
                console.log('sec should go from true to now false',secondCard);
                //cardArrState[this.state.fFLipped].flipped = !cardArrState[this.state.fFLipped].flipped;
                //cardArrState[this.state.sFLipped].flipped = !cardArrState[this.state.s]
                setTimeout( () => {
                    firstCard.flipped = !firstCard.flipped;
                    secondCard.flipped = !secondCard.flipped;

                    this.setState({
                        fFLipped: null,
                        sFLipped: null,
                        clicks: clickCounter += 1,
                        cardArr: cardArrState
                    })
                }, 2000);
                console.log('i am waiting');
            }
            //if it does match something in the array
            //we increacre the matched counter by 1 and see if they win
            // let currentMatches = this.state.matched;
            // currentMatches += 1;
            // if (this.state.totalMatches===currentMatches){
            //    //matches are the same, lets update state and win the game
            //     this.setState({
            //         fFLipped: null,
            //         sFLipped: null,
            //         clicks: clickCounter += 1,
            //         matched: currentMatches,
            //     })
            // }else {
            //     //they matched but the game isn't over
            //     this.setState({
            //         fFLipped: null,
            //         sFLipped: null,
            //         clicks: clickCounter += 1,
            //         matched: currentMatches
            //     })
            // }
        }

    }

    handleResetClick(){
        console.log('button reset lifted');
        let gamesCounter = this.state.gamesPlayed;
        const newCardArr = this.state.cardArr.slice();
        this.setState({
            fFLipped: null,
            sFLipped: null,
            clicks: 0,
            matched: 0,
            gamesPlayed: gamesCounter+=1,
            cardArr: newCardArr
        })
    }

    render(){
        console.log('cardbaord render',this);
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <GameStats
                            played={this.state.gamesPlayed}
                            clicks={this.state.clicks}
                            matched={this.state.matched}
                            onClick={()=>this.handleResetClick()}
                        />
                    </div>
                    <div className="col-12 col-sm-8">
                        <Cards
                            gameArr={this.state.cardArr}
                            onClick={(ind)=>this.handleClick(ind)}
                            firstFlipped={this.state.fFLipped}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CardBoard;