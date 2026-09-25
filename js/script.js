const init = () => {
    const navLinks = document.querySelectorAll("#navUnorderedList a");

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        if (
            window.location.pathname.endsWith(href) &&
            href !== "contactMe.html"
        ) {
            link.parentElement.classList.add("active");
        }
    });
};

window.onload = init;