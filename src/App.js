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
                <p>1ª possibilidade: </p>
                <p>Dungeon 1 [32, 5]; Dungeon 2 [17, 39]; Dungeon 3 [1, 24]; </p>
              </div>
              <div className="itemRow">
                <Caminhos caminho={1} />
              </div>
            </div>
          </div>
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <p>2ª possibilidade: </p>
                <p>Dungeon 1 [32, 5]; Dungeon 3 [1, 24];  Dungeon 2 [17, 39];</p>
              </div>
              <div className="itemRow">
                <Caminhos caminho={2} />
              </div>
            </div>
          </div>
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <p>3ª possibilidade:</p> 
                <p>Dungeon 2 [17, 39]; Dungeon 3 [1, 24]; Dungeon 1 [32, 5];</p>
              </div>
              <div className="itemRow">
                <Caminhos caminho={3} />
              </div>
            </div>
          </div>
          <div className="itemRow dungeon">
            <div className="column">
              <div className="itemRow">
                <p>Dungeon 1 [32, 5]</p>
              </div>
              <div className="itemRow">
                <Caminhos caminho={7} />
              </div>
            
              <div className="itemRow">
                <p>Dungeon 2 [17, 39]</p>
              </div>
              <div className="itemRow">
                <Caminhos caminho={8} />
              </div>
           
              <div className="itemRow">
                <p>Dungeon 3 [1, 24]</p>
              </div>
              <div className="itemRow">
                <Caminhos caminho={9} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <p>4ª possibilidade:</p>
                <p>Dungeon 2 [17, 39]; Dungeon 1 [32, 5]; Dungeon 3 [1, 24]; </p>
              </div>
              <div className="itemRow">
                <Caminhos caminho={4} />
              </div>
            </div>
          </div>
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <p>5ª possibilidade:</p>
                <p>Dungeon 3 [1, 24]; Dungeon 2 [17, 39]; Dungeon 1 [32, 5];  </p>
              </div>
              <div className="itemRow">
                <Caminhos caminho={5} />
              </div>
            </div>
          </div>
          <div className="itemRow">
            <div className="column">
              <div className="itemRow">
                <p>6ª possibilidade:</p>
                <p>Dungeon 3 [1, 24]; Dungeon 1 [32, 5]; Dungeon 2 [17, 39];</p>
              </div>
              <div className="itemRow">
                <Caminhos caminho={6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
