import React from 'react';

const GameModal = (props) => (
    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" dataDismiss="modal" ariaLabel="Close">
                        <span ariaHidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    ...ur a wiazard harry
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" dataDismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
);

export default GameModal;