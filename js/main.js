//getElementById
const heart = document.getElementById("heart");

heart.addEventListener("click", function () {

	if (heart.innerText === "🖤") {
		heart.innerText = "❤️";
	} else {
		heart.innerText = "🖤";
	}
});
