const showBtn = document.querySelector("#show");
const imagesToShow = document.querySelectorAll(".zdjs");
const addClass = document.querySelector(".addClass");
function ChgBtnNameLess() {
    let text = document.getElementById("show");
    text.innerText =  "Pokaż mniej"
};
function ChgBtnNameMore() {
    let text = document.getElementById("show");
    text.innerText =  "Pokaż więcej"
};
showBtn.addEventListener("click", () => {
    imagesToShow.forEach(el=>{
        if(el.style.opacity==="0"||el.style.opacity===""){
            el.style.opacity="100%";
            el.style.height="auto";
            ChgBtnNameLess();
        }
        else{
            el.style.opacity="0";
            setTimeout(()=>{el.style.height="0"},1150);
            setTimeout(()=>{ChgBtnNameMore()},1150);
        }
    });
})

const faqQue = document.querySelectorAll(".faqEl");
const faqAnsw = document.querySelectorAll(".faqAnswer");

faqQue.forEach(el =>{
    el.addEventListener("click", () =>{
        if(el.children[1].style.opacity===""||el.children[1].style.opacity==="0"){
            el.children[1].style.opacity="100%";
            el.children[1].style.height="auto";
        }
        else{
            el.children[1].style.opacity="0";
            setTimeout(()=>{el.children[1].style.height="0"},1150);
        }
    })
})

mailButton = document.querySelector(".submitButton");

mailButton.addEventListener("click", ()=>{
    alert("Jeśli nie masz żadnej aplikacji poczty na dole strony znajdziesz informacje kontaktowe")
})