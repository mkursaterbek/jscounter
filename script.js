const btns = document.querySelectorAll(".button");
const monitor = document.querySelector(".monitor");
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    monitor.textContent = count;
  });
});
