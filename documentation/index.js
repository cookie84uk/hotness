const sideLinks = document.querySelectorAll(
  ".sidebar .side-menu li a:not(.logout)"
);
const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sideBar = document.querySelector(".sidebar");
const searchBtn = document.querySelector(
  ".content nav form .form-input button"
);
const searchBtnIcon = document.querySelector(
  ".content nav form .form-input button .bx"
);
const searchForm = document.querySelector(".content nav form");
const toggler = document.getElementById("theme-toggle");
const copyButtons = document.querySelectorAll(".copy-button");
const snackbar = document.getElementById("snackbar");
const searchButton = document.getElementById("searchButton");
const scrollToTopButton = document.getElementById("scrollToTopButton");

const updateActiveMenu = (targetSectionId) => {
  sideLinks.forEach((item) => {
    const li = item.parentElement;
    if (item.getAttribute("href") === `#${targetSectionId}`) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
};

sideLinks.forEach((item) => {
  item.addEventListener("click", () => {
    const targetSectionId = item.getAttribute("href").slice(1);
    updateActiveMenu(targetSectionId);
  });
});

menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("close");
});

searchBtn.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle("show");
    searchBtnIcon.classList.toggle("bx-search");
    searchBtnIcon.classList.toggle("bx-x");
  }
});

window.addEventListener("resize", () => {
  sideBar.classList.toggle("close", window.innerWidth < 768);
  if (window.innerWidth > 576) {
    searchBtnIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});

toggler.addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});

copyButtons.forEach((copyButton) => {
  copyButton.addEventListener("click", function () {
    const textToCopy = copyButton.previousElementSibling;
    const text = textToCopy.innerText;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied:", text);
        snackbar.innerText = "Text copied";
        snackbar.classList.add("show");
        setTimeout(() => {
          snackbar.classList.remove("show");
        }, 1000);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  });
});

// ** scroll
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (scrollToTopBtn) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    scrollToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
});


(function() {
  window.prettyPrint && prettyPrint();
})();


