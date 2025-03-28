import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./Modal.scss";

interface ModalProps {
    children: React.ReactNode,
    state: boolean,
    handleClose: () => void
}

export default function Modal({children, state, handleClose}: ModalProps) {
    const [modalState, setModalState] = useState(false);

    useEffect(() => {
        setModalState(state);
    }, [state])
  
      return (
        <div className={`modal ${modalState ? "" : "hidden"}`}>
            <div className="modal__inner">
                <Button className="modal__close transparent-button" onClick={handleClose}>x</Button>
                <div className="modal__content">
                    {children}
                </div>
            </div>
            <div className="modal__background" onClick={handleClose}></div>
        </div>
      );
    }
    