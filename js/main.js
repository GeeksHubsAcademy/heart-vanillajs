//getElementById
const heart = document.getElementById("heart");

heart.addEventListener("click", function () {

	if (heart.innerText === "🖤") {
		heart.innerText = "❤️";
	} else {
		heart.innerText = "🖤";
	}
});


// getElementsByClassName
const heartClass = document.getElementsByClassName("heart-class");

heartClass[0].addEventListener("click", function () {
  console.log(heartClass[0].innerText);
	if (heartClass[0].innerText === "🖤") {
		heartClass[0].innerText = "❤️";
	} else {
		heartClass[0].innerText = "🖤";
	}
});

//getElementById
const cuadrado = document.getElementById("cuadrado");

cuadrado.addEventListener('click', function() {
  cuadrado.style.backgroundColor = 'tomato'
})

