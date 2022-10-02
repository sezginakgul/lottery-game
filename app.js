const btn = document.querySelector(".btn");
const rst = document.querySelector(".rst");
const result = document.querySelector(".result");

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  setTimeout(() => {
    return (num1.textContent = Math.trunc(Math.random() * 50) + 1);
  }, 500);
  setTimeout(() => {
    return (num2.textContent = Math.trunc(Math.random() * 50) + 1);
  }, 1000);
  setTimeout(() => {
    return (num3.textContent = Math.trunc(Math.random() * 50) + 1);
  }, 1500);
  setTimeout(() => {
    return (num4.textContent = Math.trunc(Math.random() * 50) + 1);
  }, 2000);
  setTimeout(() => {
    num5.textContent = Math.trunc(Math.random() * 50) + 1;
  }, 2500);

  setTimeout(() => {
    num6.textContent = Math.trunc(Math.random() * 50) + 1;
  }, 3000);

  setTimeout(() => {
    rst.style.display = "inline-block";
  }, 3500);

  setTimeout(() => {
    return (result.innerHTML = `Winner numbers are:<span> ${num1.textContent} - ${num2.textContent} - ${num3.textContent} - ${num4.textContent} - ${num5.textContent} - ${num6.textContent} </span>`);
  }, 3500);
});

rst.addEventListener("click", () => {
  num1.innerText = "-";
  num2.innerText = "-";
  num3.innerText = "-";
  num4.innerText = "-";
  num5.innerText = "-";
  num6.innerText = "-";
  rst.style.display = "none";
  btn.style.display = "inline-block";
  result.textContent = "";
});

window.addEventListener("load", () => {
  rst.style.display = "none";
});
