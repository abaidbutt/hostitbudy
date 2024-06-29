function toggleDropdown(menu) {
  const dropdown = document.getElementById(menu);
  const icon = document.getElementById(`${menu}-icon`);
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
    icon.classList.add("fa-chevron-up");
    icon.classList.remove("fa-chevron-down");
  } else {
    dropdown.classList.add("hidden");
    icon.classList.add("fa-chevron-down");
    icon.classList.remove("fa-chevron-up");
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("sidebar-collapsed");
  sidebar.classList.toggle("sidebar-expanded");
}

function setActiveTab() {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll("nav a");
  const dpdwns = document.querySelectorAll("nav .dpdwn");

  console.log(currentPath);

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active-tab");
    } else {
      link.classList.remove("active-tab");
    }
  });
  const array = ["servers", "security", "dash_payment", "transaction"];

  if (
    array.some((str) => currentPath.toLowerCase().includes(str.toLowerCase()))
  ) {
    console.log("red");

    const dpdwns = document.querySelectorAll(".dpdwn");

    dpdwns.forEach((dpdwn) => {
      const dpdwnLinks = dpdwn.querySelectorAll("a");
      let matchFound = false;

      dpdwnLinks.forEach((dpdwnLink) => {
        if (
          currentPath
            .toLowerCase()
            .includes(dpdwnLink.getAttribute("href").toLowerCase())
        ) {
          matchFound = true;
        }
      });

      if (matchFound) {
        dpdwn.classList.add("dpdwn-active"); // Add the active class to the matching dpdwn
      } else {
        dpdwn.classList.remove("dpdwn-active"); // Remove the active class from non-matching dpdwn
      }
    });
  }

  // dpdwns.classList.add("active-tab");
  // dpdwns.forEach((dpdwn) => {
  //   const dpdwnLinks = dpdwn.querySelectorAll("a");
  //   dpdwnLinks.forEach((dpdwnLink) => {
  //     if (dpdwnLink.getAttribute("href") === currentPath) {
  //       dpdwn.classList.add("dpdwn-active");
  //     } else {
  //       dpdwn.classList.remove("dpdwn-active");
  //     }
  //   });
  // });
}

window.addEventListener("load", setActiveTab);
window.addEventListener("popstate", setActiveTab);

// document
//   .querySelectorAll(".tab-content")
//   .forEach((tab) => tab.classList.add("hidden"));
// document.querySelector("#current").classList.remove("hidden");

// document.querySelectorAll('a[href^="#"]').forEach((tabLink) => {
//   tabLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     document
//       .querySelectorAll(".tab-content")
//       .forEach((tab) => tab.classList.add("hidden"));
//     document
//       .querySelector(tabLink.getAttribute("href"))
//       .classList.remove("hidden");
//     document
//       .querySelectorAll('a[href^="#"]')
//       .forEach((link) =>
//         link.classList.remove("border-blue-600", "text-blue-600")
//       );
//     tabLink.classList.add("border-blue-600", "text-blue-600");
//   });
// });
