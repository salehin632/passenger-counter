let count=0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count=count+1;
    console.log(count);

    countEl.innerText= count;
}


function save(){
    let countStr= count + " -"

    saveEl.textContent += countStr
    countEl.textContent=0
    count=0
}