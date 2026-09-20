const init = () => {
    const navLinks = document.querySelectorAll("#navUnorderedList a");

    navLinks.forEach((link) => {
        if (window.location.pathname.endsWith(link.getAttribute("href"))) {
            link.parentElement.classList.add("active");
        }
    });
};

window.onload = init;