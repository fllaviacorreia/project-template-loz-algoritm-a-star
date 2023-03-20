import "./styles.css";
import Matriz42x42 from "./Matriz42x42";
import Matriz1_28x28 from "./Matriz1_28x28";
import Matriz2_28x28 from "./Matriz2_28x28";
import SetMatriz from "./SetMatriz";
export default function App() {
  return (
    <div className="App">
      <div className="column">{SetMatriz(Matriz42x42)}</div>
    </div>
  );
}
