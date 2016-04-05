window.onload = function() {
  var textInputName = document.getElementById('text-input-name');
  var textWarningName = document.getElementById("text-warning-name");
  var textInputPassword = document.getElementById('text-input-password');
  var textWarningPassword = document.getElementById("text-warning-password");
  var textInputPasswordAgain = document.getElementById('text-input-password-again');
  var textWarningPasswordAgain = document.getElementById("text-warning-password-again");
  var textInputEmail = document.getElementById('text-input-email');
  var textWarningEmail = document.getElementById("text-warning-email");
  var textInputMobile = document.getElementById('text-input-mobile');
  var textWarningMobile = document.getElementById("text-warning-mobile");

  var btnSubmit = document.getElementById('btn-submit');
  var validNum = 0;

  textInputName.onfocus = function() {
    textWarningName.innerText = "必填，长度为4~16个字符";
    textWarningName.style.color = "#676767";
    textInputName.style.borderColor = "#cccccc";
  };
  textInputName.onblur = function() {

    if (textInputName.value === "") {
      textWarningName.innerText = "姓名不能为空";
      textWarningName.style.color = "red";
      textInputName.style.borderColor = "red";
    } else if (isNameValid(textInputName.value)) {
      textWarningName.innerText = "名称格式正确";
      textWarningName.style.color = "#5cbd49";
      textInputName.style.borderColor = "#5cbd49";
    } else {
      textWarningName.innerText = "名称格式错误";
      textWarningName.style.color = "red";
      textInputName.style.borderColor = "red";
    }
  };
  textInputPassword.onfocus = function() {
    textWarningPassword.innerText = "请输入密码";
    textWarningPassword.style.color = "#676767";
    textInputPassword.style.borderColor = "#cccccc";
  };
  textInputPassword.onblur = function() {

    if (textInputPassword.value === "") {
      textWarningPassword.innerText = "密码不能为空";
      textWarningPassword.style.color = "red";
      textInputPassword.style.borderColor = "red";
    } else if (isPasswordValid(textInputPassword.value)) {
      textWarningPassword.innerText = "密码可用";
      textWarningPassword.style.color = "#5cbd49";
      textInputPassword.style.borderColor = "#5cbd49";
    } else if (isPasswordDifferent(textInputPassword.value, textInputPasswordAgain.value)) {
      textWarningPassword.innerText = "密码不一致";
      textWarningPassword.style.color = "red";
      textInputPassword.style.borderColor = "red";
    } else {
      textWarningPassword.innerText = "密码格式错误,需大于8位，小于20位";
      textWarningPassword.style.color = "red";
      textInputPassword.style.borderColor = "red";
    }
  };
  textInputPasswordAgain.onfocus = function() {
    textWarningPasswordAgain.innerText = "再次输入相同密码";
    textWarningPasswordAgain.style.color = "#676767";
    textInputPasswordAgain.style.borderColor = "#cccccc";
  };
  textInputPasswordAgain.onblur = function() {
    if (textInputPasswordAgain.value === "") {
      textWarningPasswordAgain.innerText = "密码不能为空";
      textWarningPasswordAgain.style.color = "red";
      textInputPasswordAgain.style.borderColor = "red";
    } else if (isPasswordValid(textInputPasswordAgain.value)) {
      textWarningPasswordAgain.innerText = "密码可用";
      textWarningPasswordAgain.style.color = "#5cbd49";
      textInputPasswordAgain.style.borderColor = "#5cbd49";
    } else if (isPasswordDifferent(textInputPassword.value, textInputPasswordAgain.value)) {
      textWarningPassword.innerText = "密码不一致";
      textWarningPassword.style.color = "red";
      textInputPassword.style.borderColor = "red";
    } else {
      textWarningPasswordAgain.innerText = "密码格式错误,需大于8位，小于20位";
      textWarningPasswordAgain.style.color = "red";
      textInputPasswordAgain.style.borderColor = "red";
    }
  };
  textInputEmail.onfocus = function() {
    textWarningEmail.innerText = "请输入你的邮箱";
    textWarningEmail.style.color = "#676767";
    textInputEmail.style.borderColor = "#cccccc";
  };
  textInputEmail.onblur = function() {

    if (textInputEmail.value === "") {
      textWarningEmail.innerText = "邮箱不能为空";
      textWarningEmail.style.color = "red";
      textInputEmail.style.borderColor = "red";
    } else if (isEmailValid(textInputEmail.value)) {
      textWarningEmail.innerText = "邮箱正确";
      textWarningEmail.style.color = "#5cbd49";
      textInputEmail.style.borderColor = "#5cbd49";
    } else {
      textWarningEmail.innerText = "邮箱格式错误";
      textWarningEmail.style.color = "red";
      textInputEmail.style.borderColor = "red";
    }
  };
  textInputMobile.onfocus = function() {
    textWarningMobile.innerText = "请输入你的手机号";
    textWarningMobile.style.color = "#676767";
    textInputMobile.style.borderColor = "#cccccc";
  };
  textInputMobile.onblur = function() {

    if (textInputMobile.value === "") {
      textWarningMobile.innerText = "手机号不能为空";
      textWarningMobile.style.color = "red";
      textInputMobile.style.borderColor = "red";
    } else if (isMobileValid(textInputMobile.value)) {
      textWarningMobile.innerText = "手机号正确";
      textWarningMobile.style.color = "#5cbd49";
      textInputMobile.style.borderColor = "#5cbd49";
    } else {
      textWarningMobile.innerText = "手机号格式错误";
      textWarningMobile.style.color = "red";
      textInputMobile.style.borderColor = "red";
    }
  };

  btnSubmit.onclick = function() {
    if ( isAllValid(textInputName,textInputPassword,textInputPasswordAgain,textInputEmail,textInputMobile)) {
      alert("提交成功");
    } else {
      alert("输入有误");
    }
  };
};


function isNameValid(str) {
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

function isPasswordValid(str) {

  if (str.length < 8 || str.length > 20) {
    return false;
  } else {
    return true;
  }
}

function isPasswordDifferent(password, passwordAgain) {
  console.log(password !== "" && passwordAgain !== "" && password !== passwordAgain);
  return password !== "" && passwordAgain !== "" && password !== passwordAgain;
}

function isEmailValid(str) {
  var reg = /^[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

function isMobileValid(str) {
  var reg = /^\d{11}$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

function isAllValid(textInputName,textInputPassword,textInputPasswordAgain,textInputEmail,textInputMobile){
return  isNameValid(textInputName.value)&&isPasswordValid(textInputPassword.value)&&!isPasswordDifferent(textInputPassword.value, textInputPasswordAgain.value)&&isEmailValid(textInputEmail.value)&&isMobileValid(textInputMobile.value);
}
