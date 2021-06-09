function setup(numberOfDivs = 16) {
  //   if (!n || n <= 1) {
  //     const numberOfDivs = 16;
  //   } else {
  //     const numberOfDivs = n;
  //   }
  const parentDiv = document.getElementById("container");
  let squareRoot = Math.floor(Math.sqrt(numberOfDivs));
  let remainder = numberOfDivs % squareRoot;

  if (remainder) {
    parentDiv.style.gridTemplateColumns = "repeat(" + squareRoot + ", 1fr)";
    parentDiv.style.gridTemplateRows = "repeat(" + (squareRoot + 1) + ", 1fr)";
  } else {
    parentDiv.style.gridTemplateColumns = "repeat(" + squareRoot + ", 1fr)";
    parentDiv.style.gridTemplateRows = "repeat(" + squareRoot + ", 1fr)";
  }

  for (let i = 0; i < numberOfDivs; i++) {
    const newDiv = document.createElement("div");

    newDiv.id = "Div" + i;
    newDiv.classList += "square";

    // and give it some content
    // const newContent = document.createTextNode("Hi there and greetings!" + i);

    // // add the text node to the newly created div
    // newDiv.appendChild(newContent);

    parentDiv.appendChild(newDiv);
  }
}

function joeClear() {
  console.log("function called!");
  const parentDiv = document.getElementById("container");
  parentDiv.innerHTML = "";

  var num = prompt("How many divs do you want?", "16");

  console.log("typeof /n value");
  console.log(typeof num);
  console.log(num);
  if (num === null || num === "") {
    num = 16;
  } else {
    num = parseInt(num);
  }

  this.setup(num);
}

document.body.onload = setup();
console.log("Test");
