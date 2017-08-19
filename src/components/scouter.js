import React,{ Component } from 'react';


class Scouter extends Component{

    constructor(props){
        super(props);
        this.state = {
            currentPower: 0
        }
    }

    powerUp() {
        if (this.props.power === 0) this.setState({currentPower: 0});
        if(this.state.currentPower !== this.props.power) {
            this.setState((prevState, props) => {
                return {
                    currentPower: prevState.currentPower + 100,
                }
            })
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => this.powerUp(),50);
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