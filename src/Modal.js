import React from "react";
import "./Modal.css";

const Modal = props => {
    const { className, matriz, start, finish, Script, nextDungeon, stops, setStops, enterDungeon, setEnterDungeon } = {...props};
    const modalRef = React.useRef(null);
 
    const closeDropdown = event => {
        event.stopPropagation(); //impede de executar listeners dos filhos
        const contain = modalRef.current.contains(event.target);
        if (!contain) { //se clicar fora do modal, ele DESaparece
          
          document.body.removeEventListener("click", closeDropdown);
        }
      };

    return(
        <div ref={modalRef} className={`${className} modal`}>
            <Script matriz = {matriz} start = {start} finish = {finish} nextDungeon={nextDungeon} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} />
        </div>
    )
}

export default Modal;