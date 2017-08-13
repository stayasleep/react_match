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
        this.handleRadarTap = this.handleRadarTap.bind(this);
    }
    componentWillMount(){
        this.generateRandomCards();
        //this.setState({cardArr: cardObj});
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
        const cardArrState = this.state.cardArr.slice();

        if (this.state.fFLipped===null){
            cardArrState[index].flipped = !cardArrState[index].flipped;
            this.setState({
                fFLipped: index,
                cardArr: cardArrState
            })
        } else {
            cardArrState[index].flipped = !cardArrState[index].flipped;
            this.setState({sFLipped: index,cardArr: cardArrState });

            cardArrState[index].matched = !cardArrState[index].matched;//give the matched cards a special tag
            cardArrState[this.state.fFLipped].matched = !cardArrState[this.state.fFLipped].matched;
            console.log('matched true',cardArrState);
            let clickCounter = this.state.clicks;
            let firstCard = cardArrState[this.state.fFLipped];
            let secondCard = cardArrState[index];
            //check win conditions
            if (firstCard.src ===secondCard.src){
                let matched = this.state.matched +1;
                if (matched === this.state.totalMatches){
                    console.log('you matched them all');
                    this.setState({
                        matched: matched,
                        clicks: clickCounter += 1,
                        fFLipped: null,
                        sFLipped: null,
                    })
                } else {
                    setTimeout( () => {
                        this.setState({
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
        }

    }

    handleResetClick(){
        let gamesCounter = this.state.gamesPlayed;
        this.setState({
            fFLipped: null,
            sFLipped: null,
            clicks: 0,
            matched: 0,
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
        if (this.state.fFLipped !== null){
            let hintSrc = cardHints[this.state.fFLipped].src;

            let c = cardHints.map((card,index) => {
                if(card.src===hintSrc){
                    return {ind: index};
                }
            }).filter((card) => {
                return (card) && card.ind !== this.state.fFLipped;
            });
            console.log('cc',c);
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
            });
            console.log('pairs',pairs);
        }
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
                            onClick={()=> this.handleResetClick()}
                            onTouchTap={ ()=> this.handleRadarTap()}
                            cardsInLine={[this.state.fFLipped,this.state.sFLipped]}
                        />
                    </div>
                    <div className="col-12 col-sm-8">
                        {this.state.fFLipped !== null && this.state.sFLipped !== null ? (
                            <Cards
                                gameArr={this.state.cardArr}
                                onClick={()=>{}}
                                firstFlipped={this.state.fFLipped}
                            />
                            ) : (
                            <Cards
                                gameArr={this.state.cardArr}
                                onClick={(ind) => {this.handleClick(ind)}}
                                firstFlipped={this.state.fFLipped}
                            />
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardBoard;