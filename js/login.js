
function logn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var usertype = document.getElementById("usertype").value;
  console.log(email);
  console.log(password);
  console.log(usertype);
  if (email == "admin@gmail.com" && password == "a123" && usertype == "Admin") {
    window.location.href = "/admin/Admin.html";

  }
  else if (email == "employee@gmail.com" && password == "e123" && usertype == "Employee") {
    window.location.href = "/employee/employee.html";
  }
  else {
    window.location.href = "login.html";
    alert("Incorrect password try again.");
  }
}