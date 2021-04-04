import { Hero } from "./UI";
import { Axe, Luna } from "./heroes";
import { Box, Col, Row } from "@qonsoll/react-design";
import { useCallback, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Battle />
    </div>
  );
}

const Battle = () => {
  const [actions, setActions] = useState({});
  const [winner, setWinner] = useState();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const killAxe = () => {
    actions.AxeActions.takeDmg(1000000);
  };

  const startBattle = async () => {
    const atack = (interval, hero, enemy) => {
      if (!hero.isAlive()) {
        setWinner(enemy);
        return;
      }
      if (!enemy.isAlive()) {
        setWinner(hero);
        return;
      }

      setTimeout(() => {
        const isAlive = enemy.takeDmg(hero.damage);
        if (!isAlive) {
          setWinner(hero);
          return;
        }
        if (isAlive && hero.isAlive()) {
          atack(hero.calcAs(), hero, enemy);
        }
        forceUpdate();
      }, interval);
    };

    const heroNames = Object.keys(actions.heroes);

    heroNames.forEach((key) => {
      const hero = actions.heroes[key];
      const enemy = actions.heroes[heroNames.filter((i) => i !== key)[0]];

      atack(hero.calcAs(), hero, enemy);
    });
    console.log(winner);
  };

  return (
    <Row v="center" h="center">
      <Col cw="auto" mr={2}>
        <Box
          width="150px"
          height="150px"
          borderWidth="2px"
          borderStyle="dotted"
          borderColor="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Hero {...Axe} actions={actions} setActions={setActions} />{" "}
        </Box>
      </Col>
      <Col mr={2} cw="auto">
        <Box
          width="150px"
          height="150px"
          borderWidth="2px"
          borderStyle="dotted"
          borderColor="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          vs
        </Box>
      </Col>
      <Col mr={2} cw="auto">
        <Box
          width="150px"
          height="150px"
          borderWidth="2px"
          borderStyle="dotted"
          borderColor="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Hero
            {...Luna}
            actions={actions}
            setActions={setActions}
            imgStyle={{ transform: "scale(-1, 1)" }}
          />
        </Box>
      </Col>
      {actions?.AxeActions && (
        <Col cw={12} mt={4}>
          <button onClick={startBattle}>start battle</button>
        </Col>
      )}
      <Col cw={12}>
        <button onClick={killAxe}>kill Axe</button>
      </Col>
    </Row>
  );
};
