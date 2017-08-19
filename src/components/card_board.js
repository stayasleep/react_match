import React,{ Component } from 'react';
import Cards from './cards';
import GameStats from './game_stats';
import Radar from './rader';
import Scouter from './scouter';
import GameModal from './modal';
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
            power: 0,
            showModal: false,
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
        this.handleRadarTap = this.handleRadarTap.bind(this);
        this.animationEndHandler = this.animationEndHandler.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentWillMount(){
        this.generateRandomCards();
    }

    generateRandomCards(){
        const picArray = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
        let assignPic = [...picArray,...picArray];
        let assignPics = assignPic.slice();

        const cardArrRandom = this.state.cardArr.slice(); //avoid direct mutation
        const cardObj = cardArrRandom.map((card,index) =>{
            console.log('card is gener',card);
            let randomNumber = Math.floor(Math.random()*assignPics.length);
            let thisCardsImage = assignPics[randomNumber];
            assignPics.splice(randomNumber,1);
            return(
                {src: thisCardsImage , flipped: false, matched: false}
            )
        });
        this.setState({cardArr: cardObj});
    }

    handleClick (index){
        console.log('card was clicked',index);
        let firstGame = this.state.gamesPlayed;
        const cardArrState = this.state.cardArr.slice();

        if (this.state.fFLipped===null){
            firstGame === 0 ? firstGame += 1 : firstGame;
            cardArrState[index].flipped = !cardArrState[index].flipped;
            //test
            //let hints  = Object.assign({}, cardArrState[index],{flipped: true, hint:null});
            //cardArrState[index] = hints;
            this.setState({
                fFLipped: index,
                cardArr: cardArrState,
                gamesPlayed: firstGame
            })
        } else {
            cardArrState[index].flipped = !cardArrState[index].flipped;
            this.setState({sFLipped: index,cardArr: cardArrState });

            // cardArrState[index].matched = !cardArrState[index].matched;//give the matched cards a special tag
            // cardArrState[this.state.fFLipped].matched = !cardArrState[this.state.fFLipped].matched;
            let clickCounter = this.state.clicks;
            let firstCard = cardArrState[this.state.fFLipped];
            let secondCard = cardArrState[index];
            //check win conditions
            if (firstCard.src ===secondCard.src){
                cardArrState[index].matched = !cardArrState[index].matched;//give the matched cards a special tag
                cardArrState[this.state.fFLipped].matched = !cardArrState[this.state.fFLipped].matched;

                let pLevel = this.state.power;
                let matched = this.state.matched +1;
                if (matched === this.state.totalMatches){
                    this.setState({
                        showModal: true,
                        power: pLevel + 1000,
                        matched: matched,
                        clicks: clickCounter += 1,
                        fFLipped: null,
                        sFLipped: null,
                    });
                } else {
                    let pLevel = this.state.power;
                    setTimeout( () => {
                        this.setState({
                            power: pLevel + 1000,
                            matched: matched,
                            clicks: clickCounter += 1,
                            cardArr: cardArrState,
                            fFLipped: null,
                            sFLipped: null,
                        })
                    }, 2000);
                }
            } else {
               //so we didnt match
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
        }

    }

    handleResetClick(){
        let gamesCounter = this.state.gamesPlayed;
        this.setState({
            showModal: false,
            fFLipped: null,
            sFLipped: null,
            clicks: 0,
            matched: 0,
            power: 0,
            gamesPlayed: gamesCounter+=1,
            cardArr: Array(18).fill(undefined)
        });
        this.generateRandomCards();
    }

    handleRadarTap(){
        const cardHints = this.state.cardArr.slice(); //avoid direct mutation
        let immutableCards = Object.assign([], cardHints); //so you can mutate obj inside without affecting state
        console.log('oooo',immutableCards);
        //hint for one card flipped
        if (this.state.matched === 9) return null; //no actions after modal closes and game not reset
        if (this.state.fFLipped !== null){
            let hintSrc = cardHints[this.state.fFLipped].src;

            let cHint = cardHints.map((card,index) => {
                if(card.src===hintSrc){
                    return {ind: index};
                }
            }).filter((card) => {
                return (card) && card.ind !== this.state.fFLipped;
            });
            console.log('cc',cHint);
            //we maybe do something with state on second card
            let positionAt = cHint[0].ind; //position in array card at
            cardHints[positionAt]={...cardHints[positionAt], hint: true};
            this.setState({cardArr: cardHints});
        } else {
            //cards that need to be matched
            let needMatching=immutableCards.filter((cards) => {
                return !cards.matched;
            });
            //generate random number based off the length of the array to use as hintSrc
            let randomNum = Math.floor(Math.random()*needMatching.length);
            let hintSrc = needMatching[randomNum].src;
            //return the two index spots that fit the mold
            let pairs = immutableCards.map((cards,index) => {
                if (cards.src === hintSrc ){
                    return {ind: index};
                }
            }).filter((cards) => {
                return cards !== undefined;
            }).forEach((cards) => {
                console.log('for each',cards);
                let cIndex = cards.ind;
                immutableCards[cIndex]={...immutableCards[cIndex], hint:true};
            });
            this.setState({cardArr: immutableCards});//should you use pairs
        }
    }

    animationEndHandler(cssAnimate, index){
        //remove the hint animations, but leave the matched animations
        const cardState = this.state.cardArr.slice();
        if (cssAnimate === "tada"){
            let {flipped, matched, src} = cardState[index];
            cardState[index] = {flipped, matched, src};
            return this.setState({cardArr: cardState});
        }
        console.log('not cool',cssAnimate, index);
    }


    handleClose(){
        this.setState({showModal: !this.state.showModal});
    }

    render(){
        console.log('cardbaord render',this);


        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <GameStats
                            played={this.state.gamesPlayed}
                            clicks={this.state.clicks}
                            matched={this.state.matched}
                            onClick={()=> this.handleResetClick()}
                            //onTouchTap={ ()=> this.handleRadarTap()}
                            cardsInLine={[this.state.fFLipped,this.state.sFLipped]}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-8 col-sm-push-2">
                        {this.state.fFLipped !== null && this.state.sFLipped !== null ? (
                            <Cards
                                gameArr={this.state.cardArr}
                                onClick={()=>{}}
                                firstFlipped={this.state.fFLipped}
                                onAnimationEnd = {() => {this.animationEndHandler()}}
                            />
                            ) : (
                            <Cards
                                gameArr={this.state.cardArr}
                                onClick={(ind) => {this.handleClick(ind)}}
                                firstFlipped={this.state.fFLipped}
                                onAnimationEnd = {(css, index) => {this.animationEndHandler(css,index)}}
                            />
                            )}
                    </div>
                    <div className="col-xs-6 col-sm-2 col-sm-pull-8">
                        <span className="hints">Need a Hint?</span>
                        <Radar
                            cardsInLine={[this.state.fFLipped, this.state.sFLipped]}
                            onTouchTap={ ()=> this.handleRadarTap()}
                            onAnimationStart={()=> this.animationStartRadar.bind(this)()}
                            gameArr={this.state.cardArr}
                        />
                    </div>
                    <div className="col-xs-6 col-sm-2">
                        <span className="highScore">Current Score:</span>
                        <Scouter
                            power={this.state.power}
                        />
                    </div>
                    <div>
                        {this.state.showModal ? (
                                <GameModal show={true} onClick={() => this.handleClose()} onReset={()=>this.handleResetClick()} />
                            ) : (
                                <div></div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardBoard;