import React from 'react'
import "./styles.css";

import Caminhos from "./Caminhos";
import { matriz, start, finish } from "./Matriz42x42";

export default function App() {
  const [IS_FINISHED, setIS_FINISHED] = React.useState(false);
  const [stops, setStops] = React.useState(1);
  const [enterDungeon, setEnterDungeon] = React.useState(0);
  const dungeon1 = { posI: 5, posJ: 32 }
  const dungeon2 = { posI: 39, posJ: 17 }
  const dungeon3 = { posI: 24, posJ: 1 }

  function startAgain(ev) {
    setStops(1);
    setEnterDungeon(0);
  }
  return (
    <div className="App">
      <div className="column">
        <div className="row">
          <div className="column">
            {
              stops <= 4 ? <span> Dungeon 1 [32, 5]; Dungeon 2 [17, 39]; Dungeon 3 [1, 24]; </span> :
                stops <= 8 ? <span> Dungeon 1 [32, 5]; Dungeon 3 [1, 24];  Dungeon 2 [17, 39];</span> :
                  stops <= 12 ? <span> Dungeon 2 [17, 39]; Dungeon 3 [1, 24]; Dungeon 1 [32, 5];</span> :
                    stops <= 16 ? <span> Dungeon 2 [17, 39]; Dungeon 1 [32, 5]; Dungeon 3 [1, 24]; </span> :
                      stops <= 20 ? <span> Dungeon 3 [1, 24]; Dungeon 2 [17, 39]; Dungeon 1 [32, 5];  </span> :
                        stops <= 24 ? <span> Dungeon 3 [1, 24]; Dungeon 1 [32, 5]; Dungeon 2 [17, 39];</span> :
                          <div><span> sem paradas possíveis</span> <button onClick={() => startAgain}>Recmeçar</button></div>
            }

            <div className="itemRow">
              {/* {primeira opção de caminho} */}
              {
                stops == 1 ? <Caminhos caminho={1} start={start} finish={dungeon1} nextDungeon={1} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                  stops == 2 ? <Caminhos caminho={1} start={dungeon1} finish={dungeon2} nextDungeon={2} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                    stops == 3 ? <Caminhos caminho={1} start={dungeon2} finish={dungeon3} nextDungeon={3} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                      stops == 4 ? <Caminhos caminho={1} start={dungeon3} finish={finish} nextDungeon={4} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> : <></>
              }
              {/* {segunda opção de caminho} */}
              {
                stops == 5 ? <Caminhos caminho={1} start={start} finish={dungeon1} nextDungeon={1} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                  stops == 6 ? <Caminhos caminho={1} start={dungeon1} finish={dungeon3} nextDungeon={3} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                    stops == 7 ? <Caminhos caminho={1} start={dungeon3} finish={dungeon2} nextDungeon={2} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                      stops == 8 ? <Caminhos caminho={1} start={dungeon2} finish={finish} nextDungeon={4} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> : <></>
              }
              {/* {terceira opção de caminho} */}
              {
                stops == 9 ? <Caminhos caminho={1} start={start} finish={dungeon2} nextDungeon={2} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                  stops == 10 ? <Caminhos caminho={1} start={dungeon2} finish={dungeon3} nextDungeon={3} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                    stops == 11 ? <Caminhos caminho={1} start={dungeon3} finish={dungeon1} nextDungeon={1} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                      stops == 12 ? <Caminhos caminho={1} start={dungeon1} finish={finish} nextDungeon={4} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> : <></>
              }
              {/* {quarta opção de caminho} */}
              {
                stops == 13 ? <Caminhos caminho={1} start={start} finish={dungeon2} nextDungeon={2} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                  stops == 14 ? <Caminhos caminho={1} start={dungeon2} finish={dungeon1} nextDungeon={1} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                    stops == 15 ? <Caminhos caminho={1} start={dungeon1} finish={dungeon3} nextDungeon={3} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                      stops == 16 ? <Caminhos caminho={1} start={dungeon3} finish={finish} nextDungeon={4} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> : <></>
              }
              {/* {quinta opção de caminho} */}
              {
                stops == 17 ? <Caminhos caminho={1} start={start} finish={dungeon3} nextDungeon={3} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                  stops == 18 ? <Caminhos caminho={1} start={dungeon3} finish={dungeon2} nextDungeon={2} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                    stops == 19 ? <Caminhos caminho={1} start={dungeon2} finish={dungeon1} nextDungeon={1} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                      stops == 20 ? <Caminhos caminho={1} start={dungeon1} finish={finish} nextDungeon={4} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> : <></>
              }
              {/* {sexta opção de caminho} */}
              {
                stops == 21 ? <Caminhos caminho={1} start={start} finish={dungeon3} nextDungeon={3} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                  stops == 22 ? <Caminhos caminho={1} start={dungeon3} finish={dungeon1} nextDungeon={1} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                    stops == 23 ? <Caminhos caminho={1} start={dungeon1} finish={dungeon2} nextDungeon={2} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> :
                      stops == 24 ? <Caminhos caminho={1} start={dungeon2} finish={finish} nextDungeon={4} stops={stops} setStops={setStops} enterDungeon={enterDungeon} setEnterDungeon={setEnterDungeon} /> : <></>
              }
              {
                enterDungeon == 1 ? <Caminhos caminho={2} classNameModal="show"/> :
                enterDungeon == 2 ? <Caminhos caminho={3} classNameModal="show"/> :
                enterDungeon == 3 ? <Caminhos caminho={4} classNameModal="show"/> : <></>
              }
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
