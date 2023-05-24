import React from 'react';
import Script1 from "./scripts/scriptCopy_1";
import Script2 from "./scripts/scriptCopy_2";
import Script3 from "./scripts/scriptCopy_3";
import Script4 from "./scripts/scriptCopy_4";
import Script5 from "./scripts/scriptCopy_5";
import Script6 from "./scripts/scriptCopy_6";
import Script7 from "./scripts/scriptCopy_7";
import Script8 from "./scripts/scriptCopy_8";
import Script9 from "./scripts/scriptCopy_9";

import {start, finish, matriz} from './mapas/Matriz42x42';
import {matriz as matriz1 , start as start1, finish as finish1} from './mapas/Matriz1_28x28';
import {matriz as matriz2, start as start2, finish as finish2} from './mapas/Matriz2_28x28';
import {matriz as matriz3, start as start3, finish as finish3} from './mapas/Matriz3_28x28';

export default function Caminhos(props) {
    const caminho = props.caminho;      
    var stops = [];
     
    switch(caminho){
        // Dungeon 1 [32, 5]; Dungeon 2 [17, 39]; Dungeon 3 [1, 24];
        case 1: 
            stops = [{ posI: 32, posJ: 5 }, { posI: 17, posJ: 39 }, { posI: 1, posJ: 24 },];
            return <Script1 matriz={matriz} start={start} order='123' stops= {stops} finish={finish} />
        
        // Dungeon 1 [32, 5]; Dungeon 3 [1, 24]; Dungeon 2 [17, 39];
        case 2: 
            stops = [{ posI: 32, posJ: 5 }, { posI: 1, posJ: 24 }, { posI: 17, posJ: 39 },];
            return <Script2 matriz={matriz} start={start} order='132' stops= {stops} finish={finish} />
       
        // Dungeon 2 [17, 39]; Dungeon 3 [1, 24]; Dungeon 1 [32, 5];  
       case 3: 
            stops = [ { posI: 17, posJ: 39 }, { posI: 1, posJ: 24 }, { posI: 32, posJ: 5 },];
            return <Script3 matriz={matriz} start={start} order='231' stops= {stops} finish={finish} />
       
        // Dungeon 2 [17, 39]; Dungeon 1 [32, 5]; Dungeon 3 [1, 24]; 
       case 4: 
            stops = [ { posI: 17, posJ: 39 }, { posI: 32, posJ: 5 }, { posI: 1, posJ: 24 },];
            return <Script4 matriz={matriz} start={start} order='213' stops= {stops} finish={finish} />
        
        
        // Dungeon 3 [1, 24];  Dungeon 2 [17, 39]; Dungeon 1 [32, 5];
        case 5: 
            stops = [ { posI: 1, posJ: 24 }, { posI: 17, posJ: 39 }, { posI: 32, posJ: 5 },];
            return <Script5 matriz={matriz} start={start} order='321' stops= {stops} finish={finish} />
        
        // Dungeon 3 [1, 24]; Dungeon 1 [32, 5]; Dungeon 2 [17, 39]; 
        case 6: 
            stops = [ { posI: 1, posJ: 24 }, { posI: 32, posJ: 5 }, { posI: 17, posJ: 39 },];
            return <Script6 matriz={matriz} start={start} order='312' stops= {stops} finish={finish} />
        
        // Dungeon 1 [32, 5]
        case 7:
            return <Script7 matriz={matriz1} start={start1} finish={finish1} />
        
        // Dungeon 2 [17, 39]
        case 8:
            return <Script8 matriz={matriz2} start={start2} finish={finish2} />

        // Dungeon 1 [1, 24]
        case 9:
            return <Script9 matriz={matriz3} start={start3} finish={finish3} />
        default: 
            return <>Sem caminho</>
    }
}