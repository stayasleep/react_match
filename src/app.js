import React, { Component } from 'react';
import './app.css';
import CardBoard from './components/card_board';
import Welcome from './components/welcome';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            start: false
        }
    }
    componentDidMount(){
        if(!this.state.start){
            document.getElementsByTagName("html")[0].style.height="100%";
        }
    }

    componentWillUpdate(nextProps, nextState){
        nextState.start ? document.getElementsByTagName("html")[0].style.height="": null;
    }

    startGameHandler(){
        this.setState({
            start: !this.state.start
        });
    }

    render() {
        return (
              <div>
                  {!this.state.start ? (
                      <Welcome onClick={() => this.startGameHandler.bind(this)()} />
                  ) : (
                      <CardBoard />
                      )
                  }
              </div>
        );
    }
}

export default App;
