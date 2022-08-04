//get the value from the Page
function getValues() {
  // get values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    // call generateNumbers
    let fbArray = fizzBuzz(fizzValue, buzzValue);
    // call displayNumbers
    displayData(fbArray);
  } else {
    alert("You must enter an integer");
  }
}

//generate numbers from fizz to the buzz
function fizzBuzz(fizzValue, buzzValue) {
  let returnArray = [];
  // get all numbers from start to buzz
  for (let i = 1; i <= 100; i++) {
    // execute until i = buzz
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push("FizzBuzz");
    } else if (i % fizzValue == 0) {
      returnArray.push("Fizz");
    } else if (i % buzzValue == 0) {
      returnArray.push("Buzz");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

// display the numbers and mark even numbers bold
function displayData(fbArray) {
  // get the table body from the page
  let tableBody = document.getElementById("results");

  // get template row
  let templateRow = document.getElementById("fbTemplate");

  // clear the table
  tableBody.innerHTML = "";

  for (let i = 0; i < fbArray.length; i += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    // grab tds and put in an array
    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0].classList.add(fbArray[i]);
    rowCols[0].textContent = fbArray[i];

    rowCols[1].classList.add(fbArray[i + 1]);
    rowCols[1].textContent = fbArray[i + 1];

    rowCols[2].classList.add(fbArray[i + 2]);
    rowCols[2].textContent = fbArray[i + 2];

    rowCols[3].classList.add(fbArray[i + 3]);
    rowCols[3].textContent = fbArray[i + 3];

    rowCols[4].classList.add(fbArray[i + 4]);
    rowCols[4].textContent = fbArray[i + 4];

    tableBody.appendChild(tableRow);
  }
}
