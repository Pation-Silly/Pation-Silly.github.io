let x = 0;
let y = 0;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) {
        y += 1;
		console.log(y)
    }
    else if(event.keyCode == 65) {
        x -= 1;
		console.log(x)
    }
	else if(event.keyCode == 83) {
        y -= 1;
		console.log(y)
    }
	else if(event.keyCode == 68) {
        x += 1;
		console.log(x)
    }
});