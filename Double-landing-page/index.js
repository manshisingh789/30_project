const containerE1 = document.querySelector(".container");

const leftE1 = document.querySelector(".left");
const rightE1 = document.querySelector(".right");

leftE1.addEventListener("mouseenter",()=>{
    containerE1.classList.add("active-left");
});
leftE1.addEventListener("mouseleave",()=>{
    containerE1.classList.remove("active-left");
});
rightEl.addEventListener("mouseenter", () => {
    containerEl.classList.add("active-right");
});
  
rightEl.addEventListener("mouseleave", () => {
    containerEl.classList.remove("active-right");
});