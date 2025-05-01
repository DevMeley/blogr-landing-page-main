document.addEventListener("DOMContentLoaded", () => {
    const hamburgar = document.getElementById("hamburgar");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburgar && navMenu) {
        hamburgar.addEventListener("click", (event) => {
            navMenu.classList.toggle("active");
        });
    }

    const productList = document.querySelector(".product-li");
    const productMenu = document.querySelector(".product-menu");

    const companyList = document.querySelector(".company-li");
    const companyMenu = document.querySelector(".company-menu");

    const connectList = document.querySelector(".connect-li");
    const connectMenu = document.querySelector(".connect-menu");

    if (productList && productMenu) {
        productList.addEventListener("click", (event) => {
            productMenu.classList.toggle("active");
            companyMenu?.classList.remove("active");
            connectMenu?.classList.remove("active");
        });
    }

    if (companyList && companyMenu) {
        companyList.addEventListener("click", (event) => {
            companyMenu.classList.toggle("active");
            productMenu?.classList.remove("active");
            connectMenu?.classList.remove("active");
        });
    }

    if (connectList && connectMenu) {
        connectList.addEventListener("click", (event) => {
            connectMenu.classList.toggle("active");
            productMenu?.classList.remove("active");
            companyMenu?.classList.remove("active");
        });
    }

    document.addEventListener("click", (event) => {
        if (!hamburgar.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }

        if (!productList.contains(event.target) && !productMenu.contains(event.target)) {
            productMenu.classList.remove("active");
        }

        if (!companyList.contains(event.target) && !companyMenu.contains(event.target)) {
            companyMenu.classList.remove("active");
        }

        if (!connectList.contains(event.target) && !connectMenu.contains(event.target)) {
            connectMenu.classList.remove("active");
        }
    });
});