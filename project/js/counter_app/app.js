let count = 0
let counter =document.getElementById("counter")

console.log(count)

function addfun(){
    count += 1
    counter.innerText= count;
}

function minusfun(){
    count -= 1
    counter.innerText= count;
}

function resetfun(){
    count =0
    counter.innerText= count;
    alert("Resetting to 0!")
}

