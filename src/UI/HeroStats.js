import { Table } from "antd";

const HeroStats = ({ hero, forceUpdate }) => {
  const dataSource = [
    {
      key: "1",
      name: hero.name,
      dmg: hero.damage,
      hp: hero.health,
      ds: hero.defense,
      lvl: hero.lvl,
      as: hero.atackSpeed
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Dmg",
      dataIndex: "dmg",
      key: "dmg"
    },
    {
      title: "Hp",
      dataIndex: "hp",
      key: "hp"
    },
    {
      title: "Lvl",
      dataIndex: "lvl",
      key: "lvl",

      render: (lvl) => (
        <>
          <text>{lvl}</text>{" "}
          <a
            onClick={() => {
              hero.lvlUp();
              forceUpdate();
            }}
          >
            lvlUp
          </a>
        </>
      )
    },
    {
      title: "Ds",
      dataIndex: "ds",
      key: "ds"
    },
    {
      title: "As",
      dataIndex: "as",
      key: "as"
    }
  ];
  return <Table columns={columns} dataSource={dataSource} />;
};

export default HeroStats;
