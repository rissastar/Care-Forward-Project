function openApp(url) {
  window.open(url, "_blank");
}

function openSMS() {
  window.location.href = "sms:";
}

const notes = document.getElementById("notes");
notes.value = localStorage.getItem("myhub_notes") || "";

notes.addEventListener("input", () => {
  localStorage.setItem("myhub_notes", notes.value);
});