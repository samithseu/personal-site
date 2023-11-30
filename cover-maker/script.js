// Query selectors
const coverContainer = document.querySelector(".cover-container");

const schoolInput = document.querySelector("#school");
const gradeInput = document.querySelector("#grade");
const booksInput = document.querySelector("#book");
const nameInput = document.querySelector("#name");
const yearInput = document.querySelector("#year");
const borderInput = document.querySelector("#border-type");

const btnMake = document.querySelector(".btn-make");
const btnClear = document.querySelector(".btn-clear");
const btnPrint = document.querySelector(".btn-print");

// function
const checkValue = (element) => {
  let result = false;
  if (element.value != "") {
    result = true;
  }
  return result;
};

// Button make
let school,
  grade,
  name,
  year,
  border = "";
let subjects = [];

btnMake.addEventListener("click", () => {
  if (
    checkValue(schoolInput) &&
    checkValue(gradeInput) &&
    checkValue(booksInput) &&
    checkValue(nameInput) &&
    checkValue(yearInput) &&
    checkValue(borderInput)
  ) {
    school = schoolInput.value;
    grade = gradeInput.value;
    subjects = booksInput.value.split(",");
    name = nameInput.value;
    year = yearInput.value;
    border = borderInput.value;

    coverContainer.innerHTML = "";
    for (let i = 0; i < subjects.length; i++) {
      coverContainer.innerHTML += `
        <div class="cover">
        <img src="img/${border}" alt="Frames" class="absolute" />
        <h4>${school}</h4>
        <h4>ថ្នាក់ទី : <span>${grade}</span></h4>
        <h4>សៀវភៅ : <span>${subjects[i]}</span></h4>
        <h4>ឈ្មោះ : <span>${name}</span></h4>
        <h4>ឆ្នាំសិក្សា : <span>${year}</span></h4>
      </div>`;
    }
  } else {
    alert("All inputs must be filled!");
  }
});

// Button clear
btnClear.addEventListener("click", () => {
  schoolInput.value =
    gradeInput.value =
    booksInput.value =
    nameInput.value =
    yearInput.value =
      "";
  coverContainer.innerHTML = "";
});

// Button print
btnPrint.addEventListener("click", () => {
  if (subjects.length > 0) {
    window.print();
  } else {
    alert("No books inserted!");
  }
});
