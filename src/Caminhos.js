import React from 'react';
import {start, finish, matriz} from './Matriz42x42';
import Script from "./script";
import Script1 from "./scriptCopy_1";
import Script2 from "./scriptCopy_2";
import Script3 from "./scriptCopy_3";
import Script4 from "./scriptCopy_4";
import Script5 from "./scriptCopy_5";
import Script6 from "./scriptCopy_6";

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
        
            default: 
            return <>Sem caminho</>
    }
}