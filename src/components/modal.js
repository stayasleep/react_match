import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class GameModal extends React.Component{
    close() {
        this.props.onClick();
    }
    reset(){
        this.props.onReset();
    }
    render() {

        return (
            <div>
                <Modal show={this.props.show} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Congrats Z Warrior</Modal.Title>
                    </Modal.Header>
                    <Modal.Body bsClass="mBody">
                        <h4>You Win!</h4>
                        <iframe title="dbzOverNine" height="315" src="https://www.youtube.com/embed/SiMHTK15Pik?autoplay=1" frameBorder="0" allowFullScreen></iframe>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsClass="btn btn-outline-danger" onClick={this.close.bind(this)}>Close</Button>
                        <Button bsClass="btn btn-outline-dark" onClick={this.reset.bind(this)}>Play Again</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default GameModal;