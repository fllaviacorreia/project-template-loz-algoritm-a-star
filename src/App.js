import "./styles.css";
import {matriz as matriz1 , start as start1, finish as finish1} from './Matriz1_28x28';
import {matriz as matriz2, start as start2, finish as finish2} from './Matriz2_28x28';
import {matriz as matriz3, start as start3, finish as finish3} from './Matriz3_28x28';
import {matriz as matriz4, start as start4, finish as finish4} from './Matriz42x42';

import Script from "./script";
import ScriptSec from "./scriptSec";
import ScriptSec2 from "./scriptSec2";
import ScriptSec3 from "./scriptSec3";

export default function App() {
  return (
    <div className="App">
    <div className='column'> 
      <div className='row'> 
        <Script matriz = {matriz1} start = {start1} finish = {finish1}/>

        <ScriptSec2 matriz = {matriz3} start = {start3} finish = {finish3}/>

        <ScriptSec3 matriz = {matriz2} start = {start2} finish = {finish2}/>
      </div> 
      </div>
       <div className='column'> 
      </div>
     <div className='column'> 
      </div>
   <div className='column'> 
        <ScriptSec matriz = {matriz4} start = {start4} finish = {finish4}/>
      </div>   
    </div>
  );
}