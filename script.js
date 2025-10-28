document.body.style.background = "#222";
document.body.style.textAlign = "center";
document.body.style.color = "white";
document.body.style.fontFamily = "Arial";
document.body.style.paddingTop = "50px";
let question = document.createElement("h3");
question.textContent = "\u0427\u0438 \u0431\u0443\u0434\u0435 \u0437\u0430\u0432\u0442\u0440\u0430 \u0441\u043e\u043d\u044f\u0447\u043d\u043e?";
document.body.appendChild(question);
let ball = document.createElement("div");
ball.style.width = "200px";
ball.style.height = "200px";
ball.style.background = "radial-gradient(circle, #8a7fff, #000)";
ball.style.borderRadius = "50%";
ball.style.margin = "20px auto";
ball.style.display = "flex";
ball.style.alignItems = "center";
ball.style.justifyContent = "center";
ball.style.fontSize = "22px";
ball.style.cursor = "pointer";
ball.style.boxShadow = "0 0 30px #8a7fff";
document.body.appendChild(ball);
let answer = document.createElement("div");
answer.textContent = "\u0422\u0430\u043a";
ball.appendChild(answer);
let answers = [
    "\u0422\u0430\u043a",
    "\u041d\u0456",
    "\u041c\u043e\u0436\u043b\u0438\u0432\u043e",
    "\u0421\u043a\u043e\u0440\u0456\u0448\u0435 \u0437\u0430 \u0432\u0441\u0435",
    "\u041d\u0430\u0432\u0440\u044f\u0434 \u0447\u0438",
    "\u0417\u0430\u043f\u0438\u0442\u0430\u0439 \u043f\u0456\u0437\u043d\u0456\u0448\u0435",
    "\u041d\u0435 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0438\u0439",
    "\u0411\u0435\u0437\u043f\u0435\u0440\u0435\u0447\u043d\u043e!",
    "\u041d\u0435 \u0437\u0430\u0440\u0430\u0437",
    "\u0419\u043c\u043e\u0432\u0456\u0440\u043d\u043e"
];
ball.onclick = function () {
    let i = Math.floor(Math.random() * answers.length);
    answer.textContent = answers[i];
};
let hint = document.createElement("p");
hint.textContent = "\u041d\u0430\u0442\u0438\u0441\u043d\u0438 \u043d\u0430 \u043a\u0443\u043b\u044e, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c";
hint.style.opacity = "0.8";
hint.style.marginTop = "20px";
document.body.appendChild(hint);
