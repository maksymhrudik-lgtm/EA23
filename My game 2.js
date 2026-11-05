console.log("===== БИТВА З МОНСТРОМ =====");
class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }

  attack(target) {
    console.log("\n" + this.name + " атакує " + target.name + "!");

    target.health = target.health - this.attackPower;

    if (target.health < 0) {
      target.health = 0;
    }
    console.log("Здоров'я " + target.name + ": " + target.health + " HP");
  }

  showStatus() {
    console.log("\nІм'я: " + this.name);
    console.log("Здоров'я: " + this.health + " HP");
    console.log("Сила атаки: " + this.attackPower);
  }
  isAlive() {
    return this.health > 0;
  }
}

class Player extends Character {
  constructor(name, health, attackPower) {
    super(name, health, attackPower);

    this.inventory = ["Шабля", "Щит", "Обладунок"];
  }
  showInventory() {
    console.log("\nІнвентар:");

    for (let i = 0; i < this.inventory.length; i++) {
      console.log("- " + this.inventory[i]);
    }
  }
}
class Monster extends Character {
  constructor(name, health, attackPower) {
    super(name, health, attackPower);
  }
}
const player = new Player("Пан Максим", 100, 20);
const monster = new Monster("Орк", 80, 15);

console.log("\n===== ГРАВЕЦЬ =====");
player.showStatus();
player.showInventory();

console.log("\n===== МОНСТР =====");
monster.showStatus();

let round = 1;

while (player.isAlive() && monster.isAlive()) {
  console.log("\n===== РАУНД " + round + " =====");

  player.attack(monster);

  if (monster.isAlive()) {
    monster.attack(player);
  }

  console.log("\n--- Стан після раунду ---");
  player.showStatus();
  monster.showStatus();

  round++;
}

console.log("\n===== КІНЕЦЬ БИТВИ =====");
if (monster.isAlive() === false) {
  console.log("\n🏆 ПЕРЕМОГА!");
  console.log(player.name + " переміг " + monster.name + "!");
} else {
  console.log("\nПОРАЗКА!");
  console.log(monster.name + " переміг " + player.name + "...");
}