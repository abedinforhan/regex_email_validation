const validEmailRe =
  /^[-a-z0-9~!$%^&*_=+}{'?]+(.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(.[-a-z0-9_]+)*.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

document.getElementById("submit-btn").addEventListener("click", () => {
  const inputValue = document.getElementById("input-field").value;
  //   we get the value from the input box and passing it as a parameter to test function which gives us boolan true or false depending upon the regex pattern.
  const output = validEmailRe.test(inputValue); // true or false
  if (output) {
    console.log("Email is valid");
  } else {
    console.log("Email is not valid");
  }
});

// if you want to get the regex pattern you can go through this link
// https://fightingforalostcause.net/content/misc/2006/compare-email-regex.php
