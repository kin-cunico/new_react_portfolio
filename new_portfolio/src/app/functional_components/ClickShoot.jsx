const clickShoot = document.getElementById("#navbar");
const shot = document.querySelector(".shot");

clickShoot.addEventListener("click", (e) => {
	console.log(e);
	let x = e.pageX;
	let y = e.pageY;
	console.log(x, y);
	document.querySelector(".navbar").innerHTML = `<p>X: ${x}</p><p>Y: ${y}</p>`;
	const shot = document.createElement("div");
	navbar.append(shot);
	width = 40;
	radius = width / 2;
	shot.className = "shot";
	shot.style.position = "absolute";
	shot.style.left = `${x - width - 4}px`;
	shot.style.top = `${y - 1}px`;
});
