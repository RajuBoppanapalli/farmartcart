import Modal from 'react-bootstrap/Modal';
import "../sharedcomponents/popupmodel.component.css"
import { useEffect, useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import { CircleFill, X, XLg } from 'react-bootstrap-icons';




function PopUpModel(props) {
    const [show, setshow]=useState(false);
    useEffect(()=>{
        setshow(props.open);
    },[props.open])
    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>
                            {
                                props && props.title
                            }
                        </Modal.Title>
                      
                   <XLg className='closebtn'  onClick={()=>{props.closemodal()}}></XLg>
  
                    </Modal.Header>

                    <Modal.Body>
                        <p>{
                            props && props.children
                        }</p>
                    </Modal.Body>
                    {
                        props && props.actions &&
                        <Modal.Footer>
                            Footer
                        </Modal.Footer>
                    }

                </Modal>
            </div>
        </>


    );
}

export default PopUpModel;