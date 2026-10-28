console.log("Гра «Битва з монстром»");

const player = {
  name: "Пан Максим",
  health: 100,
  attack: 20
};

const monster = {
  name: "Орк",
  health: 80,
  attack: 15
};

const inventory = ["Шабля", "Щит", "Обладунок"];

function showStatus() {
  console.log("\nГравець: " + player.name);
  console.log("Здоров'я: " + player.health + " ХП");

  console.log("\nМонстр: " + monster.name);
  console.log("Здоров'я: " + monster.health + " ХП");

  console.log("\nІнвентар: " + inventory.join(", "));
}

function attack() {
  console.log("\n" + player.name + " атакує орка");

  monster.health = monster.health - player.attack;

  if (monster.health < 0) {
    monster.health = 0;
  }

  console.log("Здоров'я орка: " + monster.health + " ХП");
}

function monsterAttack() {
  console.log("\n" + monster.name + " атакує героя");

  player.health = player.health - monster.attack;

  if (player.health < 0) {
    player.health = 0;
  }

  console.log("Здоров'я героя: " + player.health + " ХП");
}

showStatus();

let round = 1;

while (player.health > 0 && monster.health > 0) {
  console.log("\n=== Раунд " + round + " ===");

  attack();
  if (monster.health > 0) {
    monsterAttack();
  }

  round++;
}

console.log("\n=== Кінець битви ===");

if (monster.health <= 0) {
  console.log("🏆 Перемога!");
  console.log(player.name + " переміг орка!");
} else {
  console.log("Поразка!");
  console.log(monster.name + " переміг героя...");
}