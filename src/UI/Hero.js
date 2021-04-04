import { Col, Row } from "@qonsoll/react-design";
import { Image } from "antd";
import { useCallback, useState } from "react";
import { Hero } from "../hero";
import { HeroStats } from "../UI";

export default function HeroWrapper(props) {
  const [hero] = useState(new Hero(props));
  const [showStats, setShowStats] = useState(false);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <div style={{ width: "100px" }}>
      <Row h="between">
        <Col cw="auto">{hero.name}</Col>
        <Col cw="auto">{hero.lvl}</Col>
      </Row>
      <div onClick={() => setShowStats((prev) => !prev)}>
        <img src={hero.icon} alt={hero.name} width="100px" />
      </div>
      {/* <Image /> */}
      {/* <Image onClick={() => setShowStats(true)} /> */}
      {showStats && <HeroStats hero={hero} forceUpdate={forceUpdate} />}
    </div>
  );
}
