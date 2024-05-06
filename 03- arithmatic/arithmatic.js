function sum(){
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;

    let result = document.getElementById("result");
    result.innerHTML = Number(firstNumber) + Number(secondNumber);

}