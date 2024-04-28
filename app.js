let string = "";


let getValueByClick = (e) => {
    try {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.getElementById("display").value = string;
        }
        else if (e.target.innerHTML == "C") {
            document.getElementById('display').value = "";
        }
        else {
            string = string + e.target.innerText;
            document.getElementById('display').value = string;
        }
    }
    catch (error) {
        document.getElementById('display').value = error;
    }

}

let myBtns = document.querySelectorAll(".myBtn");
Array.from(myBtns).forEach((btn) => {
    btn.addEventListener('click', getValueByClick);
})
