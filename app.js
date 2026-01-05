const reminders = [
  "Check once. You don’t need to stay.",
  "Nothing urgent is hiding.",
  "You’re allowed to log off.",
  "Open with intention."
];

document.getElementById("reminder").innerText =
  reminders[Math.floor(Math.random() * reminders.length)];

function launch(name, url) {
  saveTime(name);
  window.open(url, "_blank");
}

function openSMS() {
  saveTime("sms");
  window.location.href = "sms:";
}

function saveTime(name) {
  const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  localStorage.setItem(name + "_time", now);
  updateTimes();
}

function updateTimes() {
  ["facebook","messenger","instagram","snapchat","gmail","sms"].forEach(app => {
    const time = localStorage.getItem(app + "_time");
    if (time) {
      document.getElementById(app + "-time").innerText = "Last checked: " + time;
    }
  });
}

updateTimes();

// Notes
const notes = document.getElementById("notes");
notes.value = localStorage.getItem("myhub_notes") || "";

notes.addEventListener("input", () => {
  localStorage.setItem("myhub_notes", notes.value);
});