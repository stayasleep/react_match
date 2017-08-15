import React from 'react';
import {Modal, Button} from 'react-bootstrap';

// export default (props) => {
//
//     function close(){
//         props.onClick();
//     }
//
//
//     return(
//         <div>
//             <Modal
//                 show={props.showModal}
//                 onHide={close}
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Congrats Z Warrior, You Win!</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <h4>Text in a modal</h4>
//                     <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
//                     <hr />
//                     <h4>Overflowing text to show scroll behavior</h4>
//                     <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button onClick={close}>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }

// export default GameModal;

const GameModal = (props) => (

    <div className="static-modal">
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Congrats Z Warrior</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h3>You win</h3>
                <iframe height="315" src="https://www.youtube.com/embed/SiMHTK15Pik?autoplay=1" frameBorder="0" allowFullScreen></iframe>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={()=> props.onClick()}>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>

        </Modal.Dialog>
    </div>
);
export default GameModal;