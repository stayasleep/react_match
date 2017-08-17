import React,{ Component } from 'react';


class Scouter extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPower: 0
        }
    }
    //you let startFrom = initialStateValue
    //you let endAt = props.power being passed in
    //so it should start 0-----> 1000 end
    //start at 1000 ----> 2000 end
    //1000 : 100,200,300,400...1000
    //2000: 1100, 1200,1300...1900,2000
    //need to go up 100 each time

    powerUp(){
        if(this.state.currentPower !== this.props.power) {
            this.setState((prevState, props) => {
                return {
                    currentPower: prevState.currentPower + 100,
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