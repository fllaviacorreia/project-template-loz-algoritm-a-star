import React from 'react';
// import Script from "./script";
import Script1 from "./scriptCopy_1"; // usada para entrar na D1
import Script2 from "./scriptCopy_2"; // usada para entrar na D2
import Script3 from "./scriptCopy_3"; // usada para entrar na D3
import Script4 from "./scriptCopy_4"; // usada para ir para as Dungeons
// import Script5 from "./scriptCopy_5";
// import Script6 from "./scriptCopy_6";

import { matriz } from './Matriz42x42';
import {matriz as matriz1 , start as start1, finish as finish1} from './Matriz1_28x28';
import {matriz as matriz2, start as start2, finish as finish2} from './Matriz2_28x28';
import {matriz as matriz3, start as start3, finish as finish3} from './Matriz3_28x28';
import Modal from './Modal';

export default function Caminhos(props) {
    const {caminho, start, finish, classNameModal, nextDungeon, stops, setStops, enterDungeon, setEnterDungeon} = {...props};   
    // var stops = [{ posI: 5, posJ: 32 }, { posI: 39, posJ: 17 }, { posI: 24, posJ: 1 },];
    // var sentinela = 0;

    switch(caminho){
        //Start to Dungeon
        case 1: return <Script4 matriz={matriz} start={start} finish={finish} nextDungeon={nextDungeon} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} />
        //Dungeon 1
        case 2: return <Modal Script={Script1} className={classNameModal} matriz={matriz1} start={start1} finish={finish1} nextDungeon={nextDungeon} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} />
        //Dungeon 2
        case 3: return <Modal Script={Script2} className={classNameModal} matriz={matriz2} start={start2} finish={finish2} nextDungeon={nextDungeon} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} />
        //Dungeon 3
        case 4: return <Modal Script={Script3} className={classNameModal} matriz={matriz3} start={start3} finish={finish3} nextDungeon={nextDungeon} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} />
        default: return <>Sem caminho</>
    }
}