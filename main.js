const toggler= document.querySelector(".nav__toggler");
const navbar=document.querySelector(".nav");
toggler.addEventListener("click",(e)=>{
    navbar.classList.toggle("nav__expanded");
});


const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

        // Remove previous activated classes
        tabs.forEach((tab) => tab.classList.remove("active"));
        tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

        // Add new active classes
        tab.classList.add("active");
        targetTabContent.classList.add("active");
    });
});
