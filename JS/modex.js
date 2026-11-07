const slider = document.querySelector(".slider");

const btn = document.querySelector(".btn-box");

btn.addEventListener("click", () => {

    slider.style.transform = "translateX(-100vw)";

});

const accessButton = document.querySelector("#access-btn");
const loginStatus = document.querySelector("#login-status");

accessButton.addEventListener("click", () => {

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (username === "" || password === "") {

        loginStatus.textContent = "> Authentication data required.";

        return;
    }

    // Desabilita o botão durante a autenticação
    accessButton.disabled = true;

    loginStatus.textContent = "> Verifying credentials...";

    setTimeout(() => {

        loginStatus.textContent = "> Establishing secure connection...";

    }, 1500);

    setTimeout(() => {

        loginStatus.textContent = "> Access granted.";

    }, 3000);

    // Depois de mostrar todas as mensagens, vai para index.html
    setTimeout(() => {

        window.location.href = "index.html";

    }, 4000);

});

const btnBack = document.querySelector(".btn-back");

btnBack.addEventListener("click", () => {
    slider.style.transform = "translateX(0)";
});

