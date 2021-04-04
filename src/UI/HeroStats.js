import { Table } from "antd";

const HeroStats = ({ hero, lvlUp }) => {
  const dataSource = [
    {
      key: "1",
      ...hero,
      health: hero.health
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
      dataIndex: "damage",
      key: "damage"
    },
    {
      title: "Hp",
      dataIndex: "health",
      key: "health"
    },
    {
      title: "lack",
      dataIndex: "lack",
      key: "lack"
    },
    {
      title: "Lvl",
      dataIndex: "level",
      key: "level",

      render: (lvl) => (
        <>
          <>{lvl}</> <a onClick={lvlUp}>lvlUp</a>
        </>
      )
    },
    {
      title: "Ds",
      dataIndex: "defense",
      key: "defense"
    },
    {
      title: "As",
      dataIndex: "atackSpeed",
      key: "atackSpeed"
    }
  ];
  return <Table columns={columns} dataSource={dataSource} />;
};

export default HeroStats;
