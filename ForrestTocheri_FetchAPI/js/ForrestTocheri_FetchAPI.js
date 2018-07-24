var xhr = new XMLHttpRequest();

function getRandomInt(max)
{
	return Math.floor(Math.random() * Math.floor(max));
}

var num = getRandomInt(649);

xhr.onload = function()
{
	function createNode(element)
	{
		return document.createElement(element);
	}

	function append(parent,el)
	{
		return parent.appendChild(el);
	}

	var data = JSON.parse(xhr.responseText);
	const ul = document.getElementById("pokemon");

	if(ul)
	{
		document.querySelector('body h2').innerHTML = `${data.name} #${data.id}`;
		let li = createNode('li'),
		img = createNode('img'),
		img2 = createNode('img'),
		img3 = createNode('img'),
		img4 = createNode('img'),
		h3 = createNode('h3');
		p = createNode('p');
		p2 = createNode('p');
		p3 = createNode('p');
		type = createNode('h4');

		var typeInfo = '';
		for(var i = 0; i < data.types.length; i++)
		{
			if(data.types.length > 1 && i == 0)
			{
				typeInfo += data.types[i].type.name + "/";
			}
			else
			{
				typeInfo += data.types[i].type.name;
			}
		}

		img.src = data.sprites.front_default;
		img3.src = data.sprites.back_default;
		img2.src = data.sprites.front_shiny;
		img4.src = data.sprites.back_shiny;
		p.innerHTML = "Normal Sprite";
		p2.innerHTML = "Shiny Sprite";
		p3.innerHTML = "Information";
		type.innerHTML = "Type: " + typeInfo + "<br />";
		h3.innerHTML = "Height: " + data.height +  "&emsp;Weight: " + data.weight + "&emsp;BaseXP: " + data.base_experience;

		append(li, type);
		append(li, p);
		append(li,img);
		append(li, img3);
		append(li, p2);
		append(li, img2);
		append(li, img4);
		append(li, p3);
		append(li, h3);
		append(ul,li);
	}
}
xhr.open('GET', 'http://pokeapi.salestock.net/api/v2/pokemon/' + num + '/', true);
xhr.send(null);