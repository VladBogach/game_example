import { Hero } from "./UI";
import { Axe, Luna } from "./heroes";

const heroes = [Axe, Luna];

export default function App() {
  return (
    <div className="App">
      {heroes.map((hero) => (
        <Hero {...hero} />
      ))}
    </div>
  );
}
