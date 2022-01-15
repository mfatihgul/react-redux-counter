import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwo from "./components/IncreaseByTwo";
import DecreaseByTwo from "./components/DecreaseByTwo";

function App() {
  return (
    <>
      <Counter />
      <IncreaseCounter />
      <IncreaseByTwo />
      <DecreaseCounter />
      <DecreaseByTwo />
    </>
  );
}

export default App;
