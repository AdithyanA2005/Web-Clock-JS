let hourHand = document.getElementById("hour");
let minuteHand = document.getElementById("minute");
let secondHand = document.getElementById("second");

let digiHourDisplay = document.getElementById("digi_hour");
let digiMinuteDisplay = document.getElementById("digi_minute");
let digiSecondDisplay = document.getElementById("digi_second");
let digiAmPmDisplay = document.getElementById("digi_ampm");

// ANOLOG CLOCK
setInterval(() => {
  let day = new Date;
  let hour = day.getHours();
  let minute = day.getMinutes();
  let second = day.getSeconds();
  
  hourHand.style.transform = `rotateZ(${hour * 30 + (minute/2)}deg)`;
  minuteHand.style.transform = `rotateZ(${minute * 6}deg)`;
  secondHand.style.transform = `rotateZ(${second * 6}deg)`;
})

// DIGI CLOCK
setInterval(() => {
  let digiDay = new Date;
  let digiHour = digiDay.getHours();
  let digiMinute = digiDay.getMinutes();
  let digiSecond = digiDay.getSeconds();
  
  // Converting 24hr to 12hr time
  if (digiHour > 12) {
    digiHour = digiHour - 12;
    digiAmPmDisplay.innerHTML = "PM";
  } else {
    digiAmPmDisplay.innerHTML = "AM";
  }

  // Adding 0 before single digit numbers
  digiHour = (digiHour < 10) ? "0" + digiHour : digiHour;
  digiMinute = (digiMinute < 10) ? "0" + digiMinute : digiMinute;
  digiSecond = (digiSecond < 10) ? "0" + digiSecond : digiSecond;
  
  digiHourDisplay.innerHTML = digiHour;
  digiMinuteDisplay.innerHTML = digiMinute;
  digiSecondDisplay.innerHTML = digiSecond;
})
