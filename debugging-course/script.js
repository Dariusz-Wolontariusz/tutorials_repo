function printName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
}

function printNTimes(n, value) {
  for (let i = 0; i < n; i++) {
    console.log(value);
  }
}

document.addEventListener("click", () => {
  console.log("Clicked");
});
setTimeout(() => console.log("Darek is awesome"), 3000);

printNTimes(5, "Hi");

function main() {
  printName("Kyle", "Cook");
  test();
}

function test() {
  printNTimes(5, "Bye");
}

main();
