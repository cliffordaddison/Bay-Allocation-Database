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


  let am_pm;
  let updated_am_pm;
  
  am_pm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12; 
  
  updated_am_pm = updatedHours >= 12 ? 'PM' : 'AM';
  updatedHours = updatedHours % 12;
  updatedHours = updatedHours ? updatedHours : 12;

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

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success!");
    })
  });
});


