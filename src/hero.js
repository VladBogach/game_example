class Unit {
  constructor({
    icon,
    health,
    damage,
    defense,
    atackSpeed,
    lvl,
    maxLvl,
    hpPerLvl,
    dmgPerLvl,
    dfsPerLvl,
    asPerLvl
  }) {
    //stats
    this.health = health || 500;
    this.damage = damage || 70;
    this.defense = defense || 30;
    this.atackSpeed = atackSpeed || 1;

    //animation
    this.icon = icon;

    //lvl
    this.lvl = lvl || 1;
    this.maxLvl = maxLvl || 25;
    this.hpPerLvl = hpPerLvl || 0.06;
    this.dmgPerLvl = dmgPerLvl || 0.03;
    this.dfsPerLvl = dfsPerLvl || 0.03;
    this.asPerLvl = asPerLvl || 0.01;
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
  constructor(params = {}) {
    super(params);
    this.name = params.name;
  }
}

export { Creep, Hero };
