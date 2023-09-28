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


// INPUT
const nombreUsuario = document.getElementById('nombreUsuario')

nombreUsuario.addEventListener('input', () => {	
	console.log(nombreUsuario.value);
})

// nombreUsuario.addEventListener('keydown', (event) => {
// 	if (event.key === "Enter") {
//     console.log('enteeeeeeeeeeeeer');
//   }
// })

// const nombreUsuario = document.getElementById('nombreUsuario')

// nombreUsuario.addEventListener('input', () => {	
// 	localStorage.setItem('nombreUsuario', nombreUsuario.value)

// 	console.log(localStorage.getItem('edad'));
// })

// INPUT COLOR
const colorSeleccionado = document.getElementById('colorSeleccionado')
const caja1 = document.getElementById('caja1')

colorSeleccionado.addEventListener('input', () => {
	caja1.style.backgroundColor = colorSeleccionado.value;
})


