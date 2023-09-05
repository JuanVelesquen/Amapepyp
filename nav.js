const primaryNav = document.querySelector(".primary-navigation");
const navtoggle = document.querySelector(".mobile-nav-toggle");

navtoggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false")
    {
        primaryNav.setAttribute("data-visible","true");
        navtoggle.setAttribute("aria-expanded","true");
    }
    else if (visibility === "true")
    {
        primaryNav.setAttribute("data-visible","false");
        navtoggle.setAttribute("aria-expanded","false");
    }
})