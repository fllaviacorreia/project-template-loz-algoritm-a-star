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
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <span>1ª possibilidade: Dungeon 1 [32, 5]; Dungeon 2 [17, 39]; Dungeon 3 [1, 24]; </span>
              </div>
              <div className="itemRow">
                <Caminhos caminho={1} />
              </div>
            </div>
          </div>
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <span>2ª possibilidade: Dungeon 1 [32, 5]; Dungeon 3 [1, 24];  Dungeon 2 [17, 39];</span>
              </div>
              <div className="itemRow">
                <Caminhos caminho={2} />
              </div>
            </div>
          </div>
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <span>3ª possibilidade: Dungeon 2 [17, 39]; Dungeon 3 [1, 24]; Dungeon 1 [32, 5];</span>
              </div>
              <div className="itemRow">
                <Caminhos caminho={2} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <span>4ª possibilidade: Dungeon 2 [17, 39]; Dungeon 1 [32, 5]; Dungeon 3 [1, 24]; </span>
              </div>
              <div className="itemRow">
                <Caminhos caminho={4} />
              </div>
            </div>
          </div>
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <span>5ª possibilidade: Dungeon 3 [1, 24]; Dungeon 2 [17, 39]; Dungeon 1 [32, 5];  </span>
              </div>
              <div className="itemRow">
                <Caminhos caminho={5} />
              </div>
            </div>
          </div>
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <span>6ª possibilidade: Dungeon 3 [1, 24]; Dungeon 1 [32, 5]; Dungeon 2 [17, 39];</span>
              </div>
              <div className="itemRow">
                <Caminhos caminho={6} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <span>Dungeon 1 [32, 5]</span>
              </div>
              <div className="itemRow">
                <Caminhos caminho={7} />
              </div>
            </div>
          </div>
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <span>Dungeon 2 [17, 39]</span>
              </div>
              <div className="itemRow">
                <Caminhos caminho={8} />
              </div>
            </div>
          </div>
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <span>Dungeon 3 [1, 24]</span>
              </div>
              <div className="itemRow">
                <Caminhos caminho={9} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
