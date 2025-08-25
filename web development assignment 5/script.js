// Part 1: Variables & Conditionals
document.getElementById("checkAgeBtn").onclick = () => {
    let age = document.getElementById("ageInput").value;
    document.getElementById("ageResult").textContent =
        age >= 18 ? "You can vote ✅" : "Too young ❌";
};

// Part 2: Functions
function add(a, b) { return a + b; }
document.getElementById("sumBtn").onclick = () => {
    let n1 = +document.getElementById("num1").value;
    let n2 = +document.getElementById("num2").value;
    document.getElementById("sumResult").textContent = `Sum = ${add(n1, n2)}`;
};

// Part 3: Loops
document.getElementById("showNumbersBtn").onclick = () => {
    let list = document.getElementById("numberList");
    list.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.textContent = i;
        list.appendChild(li);
    }
};

// Part 4: DOM Manipulation
document.getElementById("toggleBtn").onclick = () => {
    let text = document.getElementById("toggleText");
    text.style.display = text.style.display === "none" ? "block" : "none";
};

let count = 1;
document.getElementById("addItemBtn").onclick = () => {
    let li = document.createElement("li");
    li.textContent = "Item " + count++;
    document.getElementById("dynamicList").appendChild(li);
};