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

//Calendario
function renderCalendar() {
  let currentDay = date.getDate();
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

    days.innerHTML += `<div class= "${
      i === currentDay && date.getMonth() === month ? "day-current" : ""
    } day" id = "day-${i}">${i}</div>`;
  }

  // Evento de click nos dias
  document.addEventListener("DOMContentLoaded", function () {
    let availableDays = [23, 24];

    availableDays.forEach((day) => {
      let daysList = document.querySelectorAll(".days .day");
      let dayElement = daysList[day - 1];

      dayElement.classList.add("day-available");

      let rightContainer = document.querySelector(".right-container");
      dayElement.addEventListener("click", () => {
        rightContainer.classList.add("schedule");

        let buttons = document.querySelector(".container-buttons");
        buttons.classList.add("schedule");

        daysList.forEach((dayElement) => {
          dayElement.classList.remove("day-selected");
        });

        dayElement.classList.add("day-selected");

        let clickedDate = new Date(year, month, day);

        let dayOfWeek = clickedDate.getDay();
        let selectedDay = document.querySelectorAll("#selected-day");
        selectedDay.textContent = `<div>${dayWeeks[dayOfWeek]}, ${months[month]}, ${day}</div>`;

        let schedules30 = [
          "13:30pm",
          "14:00pm",
          "14:30pm",
          "15:00pm",
          "15:30pm",
        ];
        let schedules60 = [
          "14:00pm",
          "15:00pm",
          "16:30pm",
          "17:30pm",
          "18:30pm",
        ];
        let container = document.querySelector(".container-buttons");
        let button = document.querySelector(".container-buttons");
        let buttonDuration = document.querySelectorAll(".option");
        buttonDuration.forEach((duration) => {
          duration.addEventListener("click", () => {
            let value = duration.value;

            if (value == "30") {
              button.innerHTML = "";

              schedules30.forEach(function (item) {
                const button = document.createElement("button");
                button.textContent = item;
                button.classList.add("schedule");
                container.appendChild(button);
              });
            } else {
              button.innerHTML = "";
              schedules60.forEach(function (item) {
                const button = document.createElement("button");
                button.textContent = item;
                button.classList.add("schedule");
                container.appendChild(button);
              });
            }
          });
        });
      });
    });
  });
}

//-------------------------------
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
