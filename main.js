// My Variables
let sub = document.querySelector("[type='submit']")
let elementNums = document.querySelector("[type='number']")
let myText = document.querySelector("[type='text']")
let myForm = document.forms[0];
let selectType = document.querySelector("[name='type']")

// Functions
sub.onclick = function () {
    let result = document.querySelector(".results")
    result.replaceChildren();
    if (elementNums !== "" || myText !== "") {
        {
            for (let i = 0; i < elementNums.value; i++) {
                let boxes;
                if (selectType.value === "Section") {
                    boxes = document.createElement("section");
                }
                else {
                    boxes = document.createElement("div");
                }
                let boxTitle = document.createTextNode(myText.value)
                boxes.appendChild(boxTitle)
                document.body.appendChild(boxes)
                result.appendChild(boxes);
                result.children[i].setAttribute("class", "box")
                result.children[i].setAttribute("title", "Element")
                result.children[i].setAttribute("id", `id-${i + 1}`)
            }
        }
    }
}

// Submit Terminated
myForm.onsubmit = (x) => x.preventDefault();