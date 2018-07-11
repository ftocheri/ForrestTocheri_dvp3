document.querySelector('#gallery h2').innerHTML = "Historical <strong>Characters</strong>";
var xhr = new XMLHttpRequest();
xhr.onload = function()
{
	//initiate a counter
	var x = 0;
	//save my json data to a variable
	var data = JSON.parse(xhr.responseText);

	var locationSection = document.querySelector('#gallery');
	//check that the location exists
	if(locationSection)
	{
		//create a variable to keep track of my current image
		var currentImage = [];
		//create a variable to keep track of my current description
		var currentDescription = [];
		//create a variable to keep track of my current title
		var currentTitle = [];
		//fill my variable with the data from my json file
		for(var i = 0; i < data.images.length; i++)
		{
			currentImage.push(data.images[i].image);
			currentTitle.push(data.images[i].title);
			currentDescription.push(data.images[i].description);
		}

		//crate a line of code to fill in my initial image on load
		var info = '';
		info += '<p><img src = "' + currentImage[x] + '"alt="' + currentDescription[x] + '"></p>';
		info += '<h3>' + currentTitle[x] + '</h3>';
		info += '<p>' + currentDescription[x] + '</p>';
		//set that section to the pulled data
		document.querySelector('#gallery article').innerHTML = info;

		//create a function for the next arrow
		function nextImage(event)
		{
			//check that the counter does not exceed our array size
			if(x == 2)
			{
				x = 0;
			}
			else
			{
				x++;
			}
			//create another block of code containing the next image in line
			//set the pages gallery tag to our new data
			var info = '';
			info += '<p><img src = "' + currentImage[x] + '"alt="' + currentDescription[x] + '"></p>';
			info += '<h3>' + currentTitle[x] + '</h3>';
			info += '<p>' + currentDescription[x] + '</p>';
			document.querySelector('#gallery article').innerHTML = info;
		}

		//create almost identical function for our previous buttons
		// with just iterate backwards instead of forewards
		function previousImage(event)
		{
			if(x == 0)
			{
				x = 2;
			}
			else 
			{
				x--;
			}
			var info = '';
			info += '<p><img src = "' + currentImage[x] + '"alt="' + currentDescription[x] + '"></p>';
			info += '<h3>' + currentTitle[x] + '</h3>';
			info += '<p>' + currentDescription[x] + '</p>';
			document.querySelector('#gallery article').innerHTML = info;
		}

		//attach the functions to eventlisteners on the button objects
		//this will do the last of the type button
		//is the next arrow
		var next = document.querySelector('.pagination li:last-of-type button');
		next.addEventListener("click", nextImage);

		//this will do the first of type button
		//is the previous arrow
		var previous = document.querySelector('.pagination li:first-of-type button');
		previous.addEventListener("click", previousImage);
	}
}
xhr.open('GET', 'https://ftocheri.github.io/ForrestTocheri_dvp3/gallery.json', true);
xhr.send(null);