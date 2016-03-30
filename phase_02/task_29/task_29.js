window.onload = function() {
  var textInput = document.getElementById('text-input');
  var btnSubmit = document.getElementById('btn-submit');
  var textWarning = document.getElementById("text-warning");

  btnSubmit.onclick = function() {
    if (textInput.value === "") {
      textWarning.innerText = "姓名不能为空";
      textWarning.style.color = "red";
      textInput.style.borderColor = "red";
    } else if (validate(textInput.value)) {
      textWarning.innerText = "名称格式正确";
      textWarning.style.color = "#5cbd49";
      textInput.style.borderColor = "#5cbd49";
    } else {
      textWarning.innerText = "名称格式错误";
      textWarning.style.color = "red";
      textInput.style.borderColor = "red";
    }
  };
};

function validate(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (/[\u4e00-\u9fa5]/.test(str[i])) {
      count += 2;
    } else if (/[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/i.test(str[i])) {
      count += 1;
    } else {
      return false;
    }
  }
  return count <= 16 && count >= 4;
}
