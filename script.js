function calculate(operator) {
    const input1 = +document.querySelector(".num1").value;
    const input2 = +document.querySelector(".num2").value;
    let result;
    switch(operator){
        case "add":
            result = input1 + input2;
            break;
        case "subtract":
            result = input1 - input2;
            break;
        case "multiply":
            result = input1 * input2;
            break;
        case "divide":
            result = input1 / input2;
            break;
        default:
            result = "Invalid operator";
            break;
    }

    document.querySelector("#result-value").textContent = result;
    
}

document.querySelector("#add").addEventListener("click",()=>{
    calculate("add")
});

document.querySelector("#subtract").addEventListener("click",()=>{
    calculate("subtract")
});

document.querySelector("#multiply").addEventListener("click",()=>{
    calculate("multiply")
});

document.querySelector("#divide").addEventListener("click",()=>{
    calculate("divide")
});