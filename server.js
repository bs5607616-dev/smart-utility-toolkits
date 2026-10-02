const http = require("http");
const crypto = require("crypto");

const PORT = 3000;

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Smart Utility Toolkit</title>

    <style>
        body {
            font-family: Arial;
            margin: 0;
            background: linear-gradient(135deg, #111827, #2563eb);
            color: white;
        }

        header {
            text-align: center;
            padding: 35px;
        }

        header h1 {
            font-size: 38px;
        }

        .container {
            max-width: 1100px;
            margin: auto;
            padding: 20px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 20px;
        }

        .card {
            background: white;
            color: #111827;
            padding: 22px;
            border-radius: 16px;
            box-shadow: 0 10px 25px #0004;
        }

        .card h2 {
            margin-top: 0;
        }

        input, select, button {
            width: 100%;
            padding: 11px;
            margin: 6px 0;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 15px;
            box-sizing: border-box;
        }

        button {
            background: #2563eb;
            color: white;
            border: none;
            cursor: pointer;
            font-weight: bold;
        }

        button:hover {
            background: #1d4ed8;
        }

        .result {
            background: #eef2ff;
            padding: 12px;
            border-radius: 8px;
            margin-top: 8px;
            font-weight: bold;
        }

        footer {
            text-align: center;
            padding: 25px;
        }
    </style>
</head>

<body>

<header>
    <h1>🚀 Smart Utility Toolkit</h1>
    <p>Useful tools in one place</p>
</header>

<div class="container">

<div class="grid">

<!-- CALCULATOR -->
<div class="card">

<h2>🧮 Calculator</h2>

<input id="a" type="number" placeholder="First number">

<select id="op">
    <option value="+">Addition (+)</option>
    <option value="-">Subtraction (-)</option>
    <option value="*">Multiplication (×)</option>
    <option value="/">Division (÷)</option>
</select>

<input id="b" type="number" placeholder="Second number">

<button onclick="calculate()">Calculate</button>

<div id="calcResult" class="result">
    Result will appear here
</div>

</div>


<!-- DICE -->
<div class="card">

<h2>🎲 Dice Roller</h2>

<p>Roll a virtual dice from 1 to 6.</p>

<button onclick="rollDice()">Roll Dice</button>

<div id="diceResult" class="result">
    🎲 Ready!
</div>

</div>


<!-- RANDOM NUMBER -->
<div class="card">

<h2>🔢 Random Number</h2>

<input id="min" type="number" value="1">

<input id="max" type="number" value="100">

<button onclick="randomNumber()">Generate</button>

<div id="randomResult" class="result">
    Number will appear here
</div>

</div>


<!-- TIMER -->
<div class="card">

<h2>⏱️ Timer</h2>

<input id="seconds" type="number" value="10">

<button onclick="startTimer()">Start Timer</button>

<button onclick="stopTimer()">Stop</button>

<div id="timerResult" class="result">
    10
</div>

</div>


<!-- UNIT CONVERTER -->
<div class="card">

<h2>📏 Unit Converter</h2>

<input id="value" type="number" placeholder="Enter value">

<select id="unit">

<option value="km-mi">
Kilometre → Mile
</option>

<option value="mi-km">
Mile → Kilometre
</option>

<option value="kg-lb">
Kilogram → Pound
</option>

<option value="lb-kg">
Pound → Kilogram
</option>

<option value="c-f">
Celsius → Fahrenheit
</option>

<option value="f-c">
Fahrenheit → Celsius
</option>

</select>

<button onclick="convert()">Convert</button>

<div id="convertResult" class="result">
    Result will appear here
</div>

</div>


<!-- SECURE RANDOM -->
<div class="card">

<h2>🔐 Secure Random</h2>

<p>Generate a secure random number.</p>

<button onclick="secureRandom()">
    Generate
</button>

<div id="secureResult" class="result">
    Waiting...
</div>

</div>

</div>

</div>

<footer>
Smart Utility Toolkit • Node.js
</footer>


<script>

function calculate() {

    const a = Number(document.getElementById("a").value);

    const b = Number(document.getElementById("b").value);

    const op = document.getElementById("op").value;

    let result;

    if (op === "+") {
        result = a + b;
    }

    else if (op === "-") {
        result = a - b;
    }

    else if (op === "*") {
        result = a * b;
    }

    else if (op === "/") {

        if (b === 0) {
            result = "Cannot divide by zero";
        }

        else {
            result = a / b;
        }

    }

    document.getElementById("calcResult").textContent =
        "Result: " + result;
}


function rollDice() {

    const dice =
        Math.floor(Math.random() * 6) + 1;

    document.getElementById("diceResult").textContent =
        "🎲 " + dice;
}


function randomNumber() {

    const min =
        Number(document.getElementById("min").value);

    const max =
        Number(document.getElementById("max").value);

    const number =
        Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("randomResult").textContent =
        "Random: " + number;
}


let timer;

function startTimer() {

    clearInterval(timer);

    let seconds =
        Number(document.getElementById("seconds").value);

    document.getElementById("timerResult").textContent =
        seconds;

    timer = setInterval(function() {

        seconds--;

        document.getElementById("timerResult").textContent =
            seconds;

        if (seconds <= 0) {

            clearInterval(timer);

            alert("⏰ Time's up!");

        }

    }, 1000);
}


function stopTimer() {

    clearInterval(timer);

}


function convert() {

    const value =
        Number(document.getElementById("value").value);

    const unit =
        document.getElementById("unit").value;

    let result;
    let outputUnit;

    if (unit === "km-mi") {

        result = value * 0.621371;
        outputUnit = "miles";

    }

    else if (unit === "mi-km") {

        result = value * 1.60934;
        outputUnit = "km";

    }

    else if (unit === "kg-lb") {

        result = value * 2.20462;
        outputUnit = "lb";

    }

    else if (unit === "lb-kg") {

        result = value * 0.453592;
        outputUnit = "kg";

    }

    else if (unit === "c-f") {

        result = (value * 9 / 5) + 32;
        outputUnit = "°F";

    }

    else {

        result = (value - 32) * 5 / 9;
        outputUnit = "°C";

    }

    document.getElementById("convertResult").textContent =
        "Result: " + result.toFixed(2) + " " + outputUnit;

}


async function secureRandom() {

    const response =
        await fetch("/api/random");

    const data =
        await response.json();

    document.getElementById("secureResult").textContent =
        "Secure random: " + data.number;

}

</script>

</body>
</html>
`;


const server = http.createServer((req, res) => {

    console.log("Request received for:", req.url);


    if (req.url === "/api/random") {

        const number =
            crypto.randomInt(1, 1000001);

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            number: number
        }));

        return;
    }


    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(html);

        return;
    }


    if (req.url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>About Page</h1>
            <p>Smart Utility Toolkit built with Node.js.</p>
            <a href="/">Home</a>
        `);

        return;
    }


    if (req.url === "/contact") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Contact Page</h1>
            <p>Contact: smarttoolkit@example.com</p>
            <a href="/">Home</a>
        `);

        return;
    }


    res.writeHead(404, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>404 - Page Not Found</h1>
        <a href="/">Go Home</a>
    `);

});


server.listen(PORT, () => {

    console.log(
        "Server running at http://localhost:" + PORT + "/"
    );

});