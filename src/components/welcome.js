import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) =>{

    function startGame(){
        props.onClick();
    }

    return(
        <div className="container">
            <div className="row">
                <div className="wLogo"/>
                <div className="col align-self-center">
                    <Button bsClass="btn btn-outline-dark btn-lg" onClick={startGame}>
                        Start Game
                    </Button>
                </div>
            </div>
        </div>
    )
}

