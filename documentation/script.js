const sideLinks = document.querySelectorAll(
  ".sidebar .side-menu li a:not(.logout)"
);
const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sideBar = document.querySelector(".sidebar");
const searchBtn = document.querySelector(
  ".content nav form .form-input button"
);
const searchBtnIcon = searchBtn.querySelector(".bx");
const searchForm = document.querySelector(".content nav form");
const toggler = document.getElementById("theme-toggle");
const copyButtons = document.querySelectorAll(".copy-button");
const snackbar = document.getElementById("snackbar");
const scrollToTopBtn = document.getElementById("scrollToTopButton");

// ** active function
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

// ** clicked link
sideLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    const targetSectionId = item.getAttribute("href").slice(1);
    updateActiveMenu(targetSectionId);
    scrollToSection(targetSectionId);
  });
});

// ** menu toggle
menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("close");
});

// ** search
searchBtn.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle("show");
    searchBtnIcon.classList.toggle("bx-search");
    searchBtnIcon.classList.toggle("bx-x");
  }
});

// ** scroll active
window.addEventListener("resize", () => {
  sideBar.classList.toggle("close", window.innerWidth < 768);
  if (window.innerWidth > 576) {
    searchBtnIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});

// ** dark
toggler.addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});

// ** copy text
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

// ** active section sidebar
const scrollToSection = (targetSectionId) => {
  const targetSection = document.getElementById(targetSectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};

// Skroll üzrə hadisələr
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

  const main = document.getElementsByTagName("main")[0];
  console.log("MAIN: ", main);

  main.addEventListener("scroll", (event) => {
    sideLinks.forEach((item) => {
      const li = item.parentElement;
      li.classList.remove("active");

      const targetSectionId = item.getAttribute("href").slice(1);
      let section = document.getElementById(targetSectionId);
      let sectionOffsetTop = section.offsetTop;
      let sectionHeight = section.getBoundingClientRect().height;
      var scrollPos = main.scrollTop;

      if (
        sectionOffsetTop <= scrollPos &&
        sectionOffsetTop + sectionHeight > scrollPos
      ) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  });
});

// ** scroll to top
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const main = document.querySelector("main");

  if (scrollToTopBtn && main) {
    main.addEventListener("scroll", function () {
      if (main.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

    scrollToTopBtn.addEventListener("click", function () {
      main.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

(function () {
  window.prettyPrint && prettyPrint();
})();
