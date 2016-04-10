
var schoolArr = [
  ["北京大学", "清华大学", "北京邮电大学", "北京林业大学"],
  ["上海大学", "上海交通大学", "复旦大学", "同济大学"],
  ["华南理工大学", "华南农业大学", "中山大学", "华南师范大学"]
];

window.onload = function() {
  var selectRadio = document.getElementById("select-radio");
  var schoolDropDown = document.getElementById("school-dropdown");
  var workplaceInput = document.getElementById("workplace-input");
  var province = document.getElementById("province");


  selectRadio.onclick = switchSelect;
  province.onclick = updateSchool;


  function switchSelect(ev) {
    console.log("checkRadio");
    var target = ev.target || ev.srcElement;
    if (target.id === "isAStudent") {
      schoolDropDown.style.display = "block";
      workplaceInput.style.display = "none";
    } else if (target.id === "notAStudent") {
      schoolDropDown.style.display = "none";
      workplaceInput.style.display = "block";
    }

  }

  function updateSchool() { //更新表单
    var str = "";
    var arr = schoolArr[this.selectedIndex];
    for (var i = 0; i < arr.length; i++) {
      str += "<option>" + arr[i] + "<\/option>";
    }
    school.innerHTML = str;
  }
};
