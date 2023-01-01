window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.style.opacity = 1;
    } else {
      backtop.style.opacity = 0;
    }
  }
  
  function openNavbar() {
    document.getElementById("navbar-responsive").style.right = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.right = "-1000px";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 100
    ) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }
  let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "../images/light.svg";
  } else {
    this.firstElementChild.src = "../images/dark-icon.svg";
  }
  document.body.classList.toggle("dark");
});