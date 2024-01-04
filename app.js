const links = document.getElementsByTagName("p");

setInterval(() => {
  for (let i = 0; i < links.length; i++) {
    if (i % 2 == 0) {
      links[i].style.width = "100%";
      links[i].style.border = "3px dotted green";
    } else {
      links[i].style.width = "120px";
      links[i].style.border = "3px dotted red";
    }
  }
}, 1000);
setInterval(() => {
  for (let i = 0; i < links.length; i++) {
    if (i % 2 == 0) {
      links[i].style.width = "120px";
      links[i].style.border = "3px solid red";
    } else {
      links[i].style.width = "100%";
      links[i].style.border = "3px dotted green";
    }
  }
}, 2000);
