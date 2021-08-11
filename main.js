canvas=document.getElementById("Car");

ctx=canvas.getContext("2d");

car_W=75;
car_H=100;
car_Y=5;
car_X=225;
background_image = "parkingLot.jpg";
greencar_image = "Capture.PNG";

function add() {
	
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;
	car_imageTag=new Image();
	car_imageTag.onload=uploadgreencar;
	car_imageTag.src=greencar_image;
	
}

function uploadBackground() {
	
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(car_imageTag, car_Y, car_X, car_W, car_H);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	
	keyPressed = e.keyCode;
	
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		else if(keyPressed == '40')
		{
			
			down();
			console.log("down");
		}
		else if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		else if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	car_X = car_X - 10;
		//car_Y = car_Y + 10;
		console.log("When up arrow is pressd, x =" -car_X-" | y = "-car_Y);
		uploadBackground();
		
		uploadgreencar();
}

function down()
{
	car_X = car_X + 10;
	//car_Y = car_Y - 10;
		console.log("When up arrow is pressd, x =" +car_X+" | y = "+car_Y);
		uploadBackground();
		uploadgreencar();
	
}

function left()
{
	car_Y = car_Y - 10;
	console.log("When up arrow is pressd, y =" -car_Y-" | x = "-car_X);
	uploadBackground();
	uploadgreencar();
}

function right()
{
	car_Y = car_Y + 10;
		console.log("When up arrow is pressd, y =" +car_Y+" | x = "+car_X);
		uploadBackground();
		uploadgreencar();
}

