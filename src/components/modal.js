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
                        <iframe height="315" src="https://www.youtube.com/embed/SiMHTK15Pik?autoplay=1" frameBorder="0" allowFullScreen></iframe>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="outline-danger" onClick={this.close.bind(this)}>Close</Button>
                        <Button bsStyle="outline-dark" onClick={this.reset.bind(this)}>Play Again</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


// const GameModal = (props) => (
//
//     <div className="static-modal">
//         <Modal.Dialog>
//             <Modal.Header>
//                 <Modal.Title id="contained-modal-title">Congrats Z Warrior</Modal.Title>
//             </Modal.Header>
//
//             <Modal.Body>
//                 <h3>You win!</h3>
//                 <iframe height="315" src="https://www.youtube.com/embed/SiMHTK15Pik?autoplay=1" frameBorder="0" allowFullScreen></iframe>
//             </Modal.Body>
//
//             <Modal.Footer>
//                 <Button bsStyle="danger" onClick={()=> props.onClick()}>Close</Button>
//                 <Button bsStyle="primary" onClick={() => props.onReset()}>Play Again</Button>
//             </Modal.Footer>
//
//         </Modal.Dialog>
//     </div>
// );

export default GameModal;