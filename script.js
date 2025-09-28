function toggleMenu() {
    const hamburger = document.querySelector(".hamburger");
    const sideMenu = document.getElementById("sidemenu");
  
    // Toggle kelas aktif pada hamburger dan side menu
    hamburger.classList.toggle("active");
    if (sideMenu.style.left === "0px") {
      sideMenu.style.left = "-250px";
    } else {
      sideMenu.style.left = "0px";
    }
  }