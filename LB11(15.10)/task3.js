function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Аргументи повинні бути числами!");
  }

  if (b === 0) {
    throw new Error("На нуль ділити не можна!");
  }

  return a / b;
}

try {
  console.log(divide(10, OneMans));
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

console.log("Програма продовжує працювати!");