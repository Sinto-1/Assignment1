window.onload(
  alert(
    "Welcome to Sinto personal site. Feel free to navigate around it and reach out to me when necessary"
  )
);
window.ondragleave(alert("Hello, I hope you had a nice experience"));

function Login(name) {
  name = prompt("Hello, Please enter your name to login to my site");
  return name;
}
