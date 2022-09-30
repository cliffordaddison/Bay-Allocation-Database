let newDate = new Date();
let day = newDate.getDate();
let month = newDate.getMonth()+1;
let year = newDate.getFullYear();
let hour = newDate.getHours();
let min = newDate.getMinutes();


hour = hour < 10 ? `0${hour}` : hour;
min = min < 10 ? `0${min}` : min;
day = day < 10 ? `0${day}` : day;
month = month < 10 ? `0${month}` : month;


let dateStamp = `${day}/${month}/${year}`;
let timeStamp = `${hour}:${min}`;

document.getElementById('date_time').value = dateStamp;
document.getElementById('time_date').value = timeStamp;


window.onload = setInterval(function() {
	
  // Today's Date Data
  let today = new Date(); // Get the date of today
  let year = today.getFullYear(); // Year
  let month = today.getMonth() + 1; // Month
  let day = today.getDate(); // Day
  let hour = today.getHours(); // Hours of the day
  let min = today.getMinutes(); // Minutes of the day

  // Update Date Data
  let threeHrsOfMillisecs = today.setHours(hour + 3); // Get the millisecs of the hour added to today's date
  let updatedDate = new Date(threeHrsOfMillisecs);
  let updatedYear = updatedDate.getFullYear();
  let updatedMonth = updatedDate.getMonth() + 1;
  let updatedDay = updatedDate.getDate();
  let updatedHours = updatedDate.getHours();
  let updatedMinutes = updatedDate.getMinutes();


  let am_pm = "AM";
  let updated_am_pm = "PM";

  if (hour >= 12) {
    hour %= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  if (updatedHours >= 12) {
    updatedHours %= 12;
    updated_am_pm = "PM";
  }
  if (updatedHours == 0) {
    updatedHours = 12;
    updated_am_pm = "AM";
  }

  console.log(updatedHours);

  hour = hour < 10 ? `0${hour}` : hour;
  updatedHours = updatedHours < 10 ? `0${updatedHours}` : updatedHours;
  min = min < 10 ? `0${min}` : min;
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  updatedMinutes = updatedMinutes < 10 ? `0${updatedMinutes}` : updatedMinutes;
  updatedMonth = updatedMonth < 10 ? `0${updatedMonth}` : updatedMonth;
  updatedDay = updatedDay < 10 ? `0${updatedDay}` : updatedDay;

  let currentDate = [day, month, year].join("-");
  let expirtyDate = [updatedDay, updatedMonth, updatedYear].join("-");
  let currentTime = `${hour}:${min} ${am_pm}`;
  let expiryTime = `${updatedHours}:${updatedMinutes} ${updated_am_pm}`;

  document.getElementById("time-in").value = `${currentDate} ${currentTime}`;
  document.getElementById("time-out").value = `${expirtyDate} ${expiryTime}`;
  
  let dateStamp = `${day}/${month}/${year}`;
  let timeStamp = `${hour}:${min}`;

  document.getElementById('date_time').value = dateStamp;
  document.getElementById('time_date').value = timeStamp;

}, 1000)

function ClearInput() {
  document.getElementById("clear-bay").value = "";

  document.getElementById("clear-container").value = "";

  document.getElementById("clear-name").value = "";

  document.getElementById("clear-phone").value = "";
}

let form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
  });
});

function TimeDue() {
  mytime=setTimeout('TimeIn()',1000);
}

