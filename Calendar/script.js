let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
let btnNext = document.querySelector(".next-btn");
let btnPrevious = document.querySelector(".prev-btn");

let dayWeeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getFormattedDate(date) {
  return `${(dayWeeks, [date.getDay()])}, ${months[date.getMonth()]}, ${date
    .getFullYear()
    .toString()
    .substring(2)}`;
}

let selectedDay = document.getElementById("selected-day");

// Inserindo datas e meses no calendario//
function renderCalendar() {
  let currentDay = date.getDay();
  let firstDayMonth = new Date(year, month, 1).getDay();
  let lastDayMonth = new Date(year, month + 1, 0).getDate();

  let currentMonth = document.getElementById("current-month");
  currentMonth.innerText = months[month] + " " + year;

  let days = document.getElementById("days");
  days.innerHTML = "";

  for (let i = 0; i < firstDayMonth; i++) {
    days.innerHTML += `<div></div>`;
  }

  for (let i = 1; i < lastDayMonth + 1; i++) {
    let days = document.getElementById("days");
    days.innerHTML += `<div class= "days" id = "day-${i}">${i}</div>`;

    if (i === currentDay) {
      days.classList.add("day-current");
    }
  }
}

btnNext.addEventListener("click", () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  renderCalendar();
});

btnPrevious.addEventListener("click", () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  renderCalendar();
});

renderCalendar();
