document.querySelector("#blog h2").innerHTML = "All About Games";
var xhr = new XMLHttpRequest();
xhr.onload = function(){
	var data = JSON.parse(xhr.responseText);

	var locationSection = document.querySelector('#blog');
	if(locationSection)
	{
		
		var x = document.querySelectorAll("article");
		for(var i=0; i < data.locations.length; i++)
		{
			var info = '';
			info += '<p class="thumbnail"><img src="' + data.locations[i].image + '"alt="' + data.locations[i].topic + '"></p>';
			info += '<h3>' + data.locations[i].topic + '</h3>';
			info += '<p>' + data.locations[i].description + '</p>';
			info += '<dl>';
			info += '<dt>' + data.locations[i].key1 + '</dt>';
			info += '<dd>' + data.locations[i].value1 + '</dd>';
			info += '<dt>' + data.locations[i].key2 + '</dt>';
			info += '<dd>' + data.locations[i].value2 + '</dd>';
			info += '<dt>' + data.locations[i].key3 + '</dt>';
			info += '<dd>' + data.locations[i].value3 + '</dd>';
			info += '</dl>';
			info += '<p><a href="' + data.locations[i].link + '">Read More</a></p>';
			x[i].innerHTML = info;
		}
		var d = document.querySelectorAll("dd");
		for(var i=0; i < d.length; i++)
		{
			if(i == 0 || i == 3 || i == 6)
			{
				d[i].style.width = "40px";
			}
			else if(i == 1 || i == 4 || i == 7)
			{
				d[i].style.width = "80px";
			}
			else
			{
				d[i].style.width = "60px";
			}
		}


	}
}
document.querySelector("#blog button").innerHTML = '<p><a href="https://www.youtube.com/watch?v=f4yhxpg7HlE" class="button">Load More</a></p>';

xhr.open('GET', 'https://ftocheri.github.io/ForrestTocheri_dvp3/NewsBasic.json', true);
xhr.send(null);