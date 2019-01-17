$(function() {
  //tabs
  const tabs = document.querySelectorAll(".tablinks");
  const tabscontent = document.querySelectorAll(".tabcontent");

  tabs.forEach(tab => {
    tab.addEventListener("click", setActiveTab.bind(null, tab));
  });

  function setActiveTab(activeTab) {
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    activeTab.classList.add("active");
    tabscontent.forEach(tabcontent => {
      tabcontent.classList.remove("active");
    });

    if (activeTab.classList.contains("tablinks__trade")) {
      var content = document.querySelector("#trade");
      content.classList.add("active");
    } else if (activeTab.classList.contains("tablinks__invest")) {
      var content = document.querySelector("#invest");
      content.classList.add("active");
    } else if (activeTab.classList.contains("tablinks__attract")) {
      var content = document.querySelector("#attract");
      content.classList.add("active");
    }
  }

  //links in header (desktop)
  const links = document.querySelectorAll(".header__items a");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const path = link.getAttribute("href");
      if (path === "#trade") {
        var tab = document.querySelector(".tablinks__trade");
        setActiveTab(tab);
      } else if (path === "#invest") {
        var tab = document.querySelector(".tablinks__invest");
        setActiveTab(tab);
      } else if (path === "#attract") {
        var tab = document.querySelector(".tablinks__attract");
        setActiveTab(tab);
      }
      document.querySelector("" + path).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  if (window.matchMedia("(max-width: 576px)").matches) {
    //links
    const tradeLink = document.querySelector("#trade-link");
    const investLink = document.querySelector("#invest-link");
    const attractLink = document.querySelector("#attract-link");
    //accordion content
    const accordionAttract = document.querySelector("#accordion__attract");

    tradeLink.addEventListener("click", function(e) {
      e.preventDefault;
      const accordionTrade = document.querySelector("#accordion__trade");
      accordionTrade.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      accordionTrade.click();
    });
    investLink.addEventListener("click", function(e) {
      e.preventDefault;
      const accordionInvest = document.querySelector("#accordion__invest");
      accordionInvest.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      accordionInvest.click();
    });
    attractLink.addEventListener("click", function(e) {
      e.preventDefault;
      const accordionAttract = document.querySelector("#accordion__attract");
      accordionAttract.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      accordionAttract.click();
    });
  }
  //links in header (mobile)
  // if (window.matchMedia("(max-width: 576px)").matches) {
  //   const accordionTrade = document.querySelector("#accordion__trade");
  //   const accordionInvest = document.querySelector("#accordion__invest");
  //   const accordionAttract = document.querySelector("#accordion__attract");
  //   const links = document.querySelectorAll(".header__items a");

  //   links.forEach(link => {
  //     link.addEventListener("click", function(e) {
  //       e.preventDefault();
  //       const path = link.getAttribute("href");
  //       if (path === "#trade") {
  //         document.querySelector("" + path).scrollIntoView({
  //           behavior: "smooth",
  //           block: "start"
  //         });
  //       } else if (path === "#invest") {
  //         document.querySelector("" + path).scrollIntoView({
  //           behavior: "smooth",
  //           block: "start"
  //         });
  //       } else if (path === "#attract") {
  //         document.querySelector("" + path).scrollIntoView({
  //           behavior: "smooth",
  //           block: "start"
  //         });
  //       }
  //     });
  //   });
  // }
});
