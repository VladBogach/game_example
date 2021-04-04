import { Hero } from "./heroes";

export default function App() {
  return (
    <div className="App">
      <Hero name="Axe" />
      <Hero name="Luna" hp={400} />
    </div>
  );
}
