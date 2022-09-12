let colors = ["red", "blue", "yellow", "green", "grey"];

const btns = document.querySelectorAll(".button");
const monitor = document.querySelector(".monitor");
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    document.querySelector("body").style.background = // bu işlemi dışarıda yapıp burada nasıl tanımlardık ?
      colors[Math.floor(Math.random() * colors.length)];
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
      document.querySelector("body").style.background = "none"; // bu işlemi dışarıda yapıp burada nasıl tanımlardık ?
    }
    monitor.textContent = count;
  });
});

// ******************************************* SORULAR *******************************************
// dışarıda yeni bir fonksiyon tanımlayıp forEach olan funcksiyonun içinde tanımlayabilir miyidik?

// yeni bir funksiyonu direkt for Each içerisinde tanımlayabilir miydik?

// renkleri increase ve decrease butonu için tek renk seçip tonları arttırıp azaltabilir miydik?
//mesela increase için kırmızı decrease için mavi seçip sayı büyüdükçe koyu azaldıkça açık bir tona yaklaşmasını sağlamak.
