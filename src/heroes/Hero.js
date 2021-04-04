// import { Image } from "antd";
import { useCallback, useState } from "react";
import { Hero } from "../hero";
import { HeroStats } from "../UI";

export default function HeroWrapper(props) {
  const [hero] = useState(new Hero(props));
  const [showStats] = useState(false);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <div className="App">
      {/* <Image onClick={() => setShowStats(true)} /> */}
      {showStats && <HeroStats hero={hero} forceUpdate={forceUpdate} />}
    </div>
  );
}
