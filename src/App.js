import "./styles.css";

import Caminhos from "./Caminhos";
export default function App() {

  return (
    <div className="App">
      <div className="column">
        <div className="row">
          <div className="column">
            <span> Dungeon 1 [32, 5]; Dungeon 2 [17, 39]; Dungeon 3 [1, 24]; </span>
            <div className="itemRow">
              <Caminhos caminho={1} />
            </div>
          </div>
          <div className="column">
            <span> Dungeon 1 [32, 5]; Dungeon 3 [1, 24]; Dungeon 2 [17, 39]; </span>
            <div className="itemRow">
              <Caminhos caminho={2} />
            </div>
          </div>
          <div className="column">
            <span> Dungeon 2 [17, 39]; Dungeon 3 [1, 24]; Dungeon 1 [32, 5]; </span>
            <div className="itemRow">
              <Caminhos caminho={3} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <span> Dungeon 2 [17, 39]; Dungeon 1 [32, 5]; Dungeon 3 [1, 24]; </span>
            <div className="itemRow">
              <Caminhos caminho={4} />
            </div>
          </div>
          <div className="column">
            <span> Dungeon 3 [1, 24]; Dungeon 2 [17, 39]; Dungeon 1 [32, 5]; </span>
            <div className="itemRow">
              <Caminhos caminho={5} />
            </div>
          </div>
          <div className="column">
            <span> Dungeon 3 [1, 24]; Dungeon 1 [32, 5]; Dungeon 2 [17, 39]; </span>
            <div className="itemRow">
              <Caminhos caminho={6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
