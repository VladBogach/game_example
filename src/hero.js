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
    asPerLvl,
    maxHealth,
    lack,
    lackPerLvl
  }) {
    //stats
    this.maxHealth = maxHealth || 500;
    this.health = health || 500;
    this.damage = damage || 70;
    this.defense = defense || 30;
    this.atackSpeed = atackSpeed || 1;
    this.lack = lack || 1;

    //animation
    this.icon = icon;

    //lvl
    this.lvl = lvl || 1;
    this.maxLvl = maxLvl || 25;
    this.hpPerLvl = hpPerLvl || 0.06;
    this.dmgPerLvl = dmgPerLvl || 0.03;
    this.dfsPerLvl = dfsPerLvl || 0.03;
    this.asPerLvl = asPerLvl || 0.1; //atcks per sec
    this.lackPerLvl = lackPerLvl || 0.08;
  }

  set health(value) {
    if (value > 0) this._health = value;
    else {
      this._health = 0;
      console.log("died");
    }
  }

  get health() {
    return this._health;
  }

  lvlUp() {
    if (this.lvl === this.maxLvl) return;

    this.lvl += 1;
    this.atackSpeed = Number(
      (this.atackSpeed + this.atackSpeed * this.asPerLvl).toFixed(2)
    );
    this.damage += Math.round(this.damage * this.dmgPerLvl);
    this.defense += Math.round(this.defense * this.dfsPerLvl);

    this.maxHealth += Math.round(this.maxHealth * this.hpPerLvl);
    if (this.health < this.maxHealth)
      this.health += Math.round(this.health * this.hpPerLvl);
    this.lack = Number((this.lack + this.lack * this.lackPerLvl).toFixed(2));
  }

  calcAs() {
    return (1 / this.atackSpeed) * 1000;
  }

  takeDmg(dmg) {
    const resist = (100 - this.defense) / 100;
    const trueDamage = dmg * resist;
    console.log(`Hero: ${this.name}, taked ${trueDamage} damage from ${dmg}`);
    this.health = this.health - trueDamage;

    return this.isAlive();
  }

  isAlive() {
    return this.health > 0;
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
