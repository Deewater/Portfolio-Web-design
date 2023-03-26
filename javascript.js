const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

function downloadFile() {
  window.open("https://drive.google.com/file/d/1zoxG-XDE9YBHG1Edq6juOCcdriWdv4SO/view?usp=share_link")
}