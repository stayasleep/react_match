import React,{ Component } from 'react';


class Scouter extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPower: 0
        }
    }

    powerUp(){
        if(this.state.currentPower !== this.props.power) {
            let startAt = this.state.currentPower;
            let endAt = this.props.power - startAt;
            this.setState((prevState, props) => {
                return {
                    currentPower: prevState.currentPower + ((props.power - prevState.currentPower) / 10),
                }
            })
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => this.powerUp(),100);
        //while(this.state.currentPower !== this.props.power){
        //     console.log('inside the while',this.props.power);
        //     this.interval = setInterval(() => this.powerUp,1000);
        // }
        // clearInterval(this.powerUp());
    }

    componentWillUnmount(){
        clearInterval(this.powerUp);
    }

    // count(){
    //     if(this.props.power === 0){
    //         this.startAt = 0;
    //         let endAt = this.props.power;
    //     }else{
    //         let endAt = this.props.power;
    //         this.startAt -= this.startAt - endAt;
    //     }
    //     setInterval(()=>{
    //
    //     },100);
    // }

    render(){


        return(
            <div className="scouter">
                <div className="scouterText count">
                    {this.state.currentPower}
                </div>
            </div>
        )
    }
}

export default Scouter;