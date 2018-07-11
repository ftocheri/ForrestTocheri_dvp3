document.querySelector('#gallery h2').innerHTML = "Historical <strong>Characters</strong>";
var xhr = new XMLHttpRequest();
xhr.onload = function()
{
	var x = 0;
	var data = JSON.parse(xhr.responseText);

	var locationSection = document.querySelector('#gallery');
	if(locationSection)
	{
		var currentImage = [];
		var currentDescription = [];
		var currentTitle = [];
		for(var i = 0; i < data.images.length; i++)
		{
			currentImage.push(data.images[i].image);
			currentTitle.push(data.images[i].title);
			currentDescription.push(data.images[i].description);
		}

		var info = '';
		info += '<p><img src = "' + currentImage[x] + '"alt="' + currentDescription[x] + '"></p>';
		info += '<h3>' + currentTitle[x] + '</h3>';
		info += '<p>' + currentDescription[x] + '</p>';
		document.querySelector('#gallery article').innerHTML = info;

		function nextImage(event)
		{
			if(x == 2)
			{
				x = 0;
			}
			else
			{
				x++;
			}
			var info = '';
			info += '<p><img src = "' + currentImage[x] + '"alt="' + currentDescription[x] + '"></p>';
			info += '<h3>' + currentTitle[x] + '</h3>';
			info += '<p>' + currentDescription[x] + '</p>';
			document.querySelector('#gallery article').innerHTML = info;
		}

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

		var next = document.querySelector('.pagination li:last-of-type button');
		next.addEventListener("click", nextImage);

		var previous = document.querySelector('.pagination li:first-of-type button');
		previous.addEventListener("click", previousImage);
	}
}
xhr.open('GET', 'https://ftocheri.github.io/ForrestTocheri_dvp3/gallery.json', true);
xhr.send(null);