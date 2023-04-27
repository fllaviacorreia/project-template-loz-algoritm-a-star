import "./styles.css";
import {
  matriz as matriz1,
  start as start1,
  finish as finish1,
} from "./Matriz1_28x28";
import {
  matriz as matriz2,
  start as start2,
  finish as finish2,
} from "./Matriz2_28x28";
import {
  matriz as matriz3,
  start as start3,
  finish as finish3,
} from "./Matriz3_28x28";
import {
  matriz as matrizPrincipal,
  start as start4,
  finish as finish4,
  stops,
} from "./Matriz42x42";

import Script from "./script";
import ScriptSec from "./scriptSec";
import ScriptSec2 from "./scriptSec2";
import ScriptSec3 from "./scriptSec3";

export default function App() {

  return (
    <div className="App">
      <div className="row">
        {/* <ScriptSec matriz={matrizPrincipal} start={start1} finish={finish1} />
        <ScriptSec2 matriz={matrizPrincipal} start={start1} finish={finish2} />
        <ScriptSec3 matriz={matrizPrincipal} start={start1} finish={finish3} /> */}
        <Script
          matriz={matrizPrincipal}
          start={start1}
          stops={stops}
          finish={finish4}
        />
      </div>
    </div>
  );
}
