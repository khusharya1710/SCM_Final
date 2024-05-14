function login() {
   const username = document.getElementById("user_id").value;
   localStorage.setItem("user_name", username);
   window.location.href("D:/C/BBV/BB Voting.html");
   console.log(username);
}

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};


function handleLogin() {
  const name_data = document.getElementById("name_id").value;
  localStorage.setItem("nameid", name_data);
}

// Date and time

const d = new Date();
const day = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();

const date = day + " - " + month + " - " + year ;

document.getElementById("date").innerHTML = date;



setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + " : " + min + " : " + sec + " " + am_pm;
	document.getElementById(
		"time"
	).innerHTML = currentTime;
}
showTime();