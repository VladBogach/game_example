import { Col, Row } from "@qonsoll/react-design";
import { Progress } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Hero } from "../hero";
import { HeroStats } from "../UI";

export default function HeroWrapper({
  imgStyle,
  children,
  actions,
  setActions,
  ...args
}) {
  const [hero] = useState(new Hero(args));
  const [showStats, setShowStats] = useState(false);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const takeDmg = (dmg) => {
    hero.takeDmg(dmg);
    forceUpdate();
  };
  const lvlUp = () => {
    hero.lvlUp();
    forceUpdate();
  };

  useEffect(() => {
    if (actions && !actions[hero.name + "Actions"]) {
      setActions((prev) => ({
        ...prev,
        heroes: { ...(prev.heroes || {}), [hero.name]: hero },
        [hero.name + "Actions"]: {
          takeDmg,
          lvlUp
        }
      }));
    }
  }, []);

  return (
    <div style={{ width: "100px" }}>
      <Row h="between">
        <Col cw="auto">{hero.name}</Col>
        <Col cw="auto">lvl: {hero.lvl}</Col>
      </Row>
      <Row>
        <Col>
          <Progress
            percent={(hero.health * 100) / hero.maxHealth}
            trailColor="black"
            strokeColor="red"
            showInfo={false}
          />
        </Col>
      </Row>
      <Row>
        <Col style={imgStyle}>
          <div onClick={() => setShowStats((prev) => !prev)}>
            <img src={hero.icon} alt={hero.name} width="100px" />
          </div>
        </Col>
      </Row>
      {showStats && <HeroStats hero={hero} lvlUp={lvlUp} />}
    </div>
  );
}
