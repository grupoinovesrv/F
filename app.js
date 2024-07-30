var btn = document.querySelector(".no");
var position

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  btn.addEventListener("touchstart", function () {
    position ? (position = 0) : (position = 150);
    btn.style.transform = `translate(${position}px,0px)`;
    btn.style.transition = "all 0.3s ease";
  });

  btn.addEventListener("touchend", function () {
    position ? (position = 0) : (position = 150);
    btn.style.transform = `translate(${position}px,0px)`;
    btn.style.transition = "all 0.3s ease";
  });
} else {
  btn.addEventListener("mouseover", function () {
    position ? (position = 0) : (position = 150);
    btn.style.transform = `translate(${position}px,0px)`;
    btn.style.transition = "all 0.3s ease";
  });
}

function tanks() {
  alert("He He He, Muito obrigadinha! Que deus te abençoe e ilumine <3, PIX: godoysabrina2003@gmail.com;  espero que eu consiga melhorar nem que seja um tiquinho seu dia")
}

function not() {
  alert("Você nem ta maluco de não aceitar, volte lá e clique no sim! :/")
}  