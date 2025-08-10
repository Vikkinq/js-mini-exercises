const colorList = document.querySelectorAll("li");

colorList.forEach((item, index) => {
  if (index % 2 === 0) {
    item.style.color = "blue";
  } else {
    item.style.color = "pink";
  }
});

colorList[0].classList.add("highlight");
colorList[colorList.length - 1].classList.add("highlight");
