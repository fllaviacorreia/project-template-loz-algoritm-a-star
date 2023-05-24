import React from 'react'
import "./styles.css";

import Caminhos from "./Caminhos";

export default function App() {
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
