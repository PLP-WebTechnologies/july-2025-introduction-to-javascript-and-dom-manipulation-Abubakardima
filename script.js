// ================================
// Part 1: Variables & Conditionals
// ================================

// Variable declaration
let userName = prompt("Enter your name:");
let hour = new Date().getHours();

// Conditional logic
let greetingMessage;
if (hour < 12) {
  greetingMessage = `Good Morning, ${userName}! `;
} else if (hour < 18) {
  greetingMessage = `Good Afternoon, ${userName}! `;
} else {
  greetingMessage = `Good Evening, ${userName}! `;
}

// Display on page
document.getElementById("greeting").textContent = greetingMessage;


// ================================
// Part 2: Functions
// ================================

// Function 1: Calculate total
function showTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").textContent = `Total = ${total}`;
}

// Function 2: Toggle text
function toggleMessage() {
  let textElement = document.getElementById("toggleText");
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}


// ================================
// Part 3: Loops
// ================================

// Example 1: For loop
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number: ${i}`;
    list.appendChild(li);
  }
}

// Example 2: While loop (countdown)
function countdown(start) {
  let result = "";
  let n = start;
  while (n > 0) {
    result += n + " ";
    n--;
  }
  result += "Lift off!";
  document.getElementById("countdownResult").textContent = result;
}


// ================================
// Part 4: DOM Manipulation
// ================================

// Change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightyellow" ? "#f9f9f9" : "lightyellow";
});

// Add item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New dynamic item!";
  list.appendChild(li);
});
