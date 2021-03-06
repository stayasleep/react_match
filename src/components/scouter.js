import React,{ Component } from 'react';
import logo from '../images/scout.png'


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
        let powerLevel = this.state.currentPower === 9000 ? 9001: this.state.currentPower;

        return(
            <div className="scouter" style={{background: `url(${logo}) center center / contain no-repeat`}}>
                <div className="scouterText count">
                    {powerLevel}
                </div>
            </div>
        )
    }
}

export default Scouter;