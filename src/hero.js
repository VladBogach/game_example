class Unit {
  constructor(icon) {
    //stats
    this.health = 500;
    this.damage = 70;
    this.defense = 30;
    this.atackSpeed = 1;

    //animation
    this.icon = icon;

    //lvl
    this.lvl = 1;
    this.maxLvl = 25;
    this.hpPerLvl = 0.06;
    this.dmgPerLvl = 0.03;
    this.dfsPerLvl = 0.03;
    this.asPerLvl = 0.01;
  }

  lvlUp() {
    if (this.lvl === this.maxLvl) return;

    this.lvl += 1;
    this.atackSpeed = Number(
      (this.atackSpeed + this.atackSpeed * this.asPerLvl).toFixed(2)
    );
    this.health += Math.round(this.health * this.hpPerLvl);
    this.damage += Math.round(this.damage * this.dmgPerLvl);
    this.defense += Math.round(this.defense * this.dfsPerLvl);
  }

  takeDmg(dmg) {
    const damage = 1 - this.defense;
    this.health -= dmg * damage > 0 ? damage : 0;
  }
}

class Creep extends Unit {}

class Hero extends Unit {
  constructor({ name } = {}) {
    super();
    this.name = name;
  }
}

export { Creep, Hero };
