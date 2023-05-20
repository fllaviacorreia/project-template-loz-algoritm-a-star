import React from "react";
import "./Modal.css";
import Script from "./script28x28";

const Modal = props => {
    const { className, modalRef, matriz, start, finish } = props;

    return(
        <div ref={modalRef} className={`${className} modal`}>
            <Script matriz = {matriz} start = {start} finish = {finish}/>
        </div>
    )
}

export default Modal;