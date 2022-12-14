$(document).ready(function () {
  $("#currentPassword").keyup(function () {
    $("#strengthMessage").html(checkStrength($("#currentPassword").val()));
  });
  $("#newPassword").keyup(function () {
    $("#strengthMessage1").html(checkStrength1($("#newPassword").val()));
  });
  $("#rePassword").keyup(function () {
    $("#strengthMessage2").html(
      checkStrength2($("#rePassword").val(), $("#newPassword").val())
    );
  });
  function checkStrength(password) {
    if (password.length < 1) {
      $("#strengthMessage").removeClass();
      $("#strengthMessage").addClass("Short");
      return "Input cannot be blank";
    } else {
      $("#strengthMessage").removeClass();
      $("#strengthMessage").addClass("");
      return "";
    }
  }
  function checkStrength1(password) {
    if (password.length < 6) {
      $("#strengthMessage1").removeClass();
      $("#strengthMessage1").addClass("Short");
      return "Please input at least 6 length";
    } else {
      $("#strengthMessage1").removeClass();
      $("#strengthMessage1").addClass("Good");
      return "Valid password";
    }
  }
  function checkStrength2(newPassword, rePassword) {
    if (newPassword !== rePassword || rePassword.length < 1) {
      $("#strengthMessage2").removeClass();
      $("#strengthMessage2").addClass("Short");
      return "Confirmation password does not match";
    } else {
      $("#strengthMessage2").removeClass();
      $("#strengthMessage2").addClass("Good");
      return "Valid confirmation password";
    }
  }
  $("#form-security").submit(function (e) {
    const currentPass = $("#currentPassword").val();
    const newPass = $("#newPassword").val();
    const rePass = $("#rePassword").val();
    console.log(rePass, newPass, currentPass);

    if (currentPass.length < 1 || newPass.length < 6 || rePass !== newPass) {
      $("#strengthMessage").html(checkStrength($("#currentPassword").val()));
      $("#strengthMessage1").html(checkStrength1($("#newPassword").val()));
      $("#strengthMessage2").html(
        checkStrength2($("#rePassword").val(), $("#newPassword").val())
      );
      e.preventDefault();
      return;
    }
  });
});
