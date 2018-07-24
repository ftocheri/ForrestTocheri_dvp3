var xhr = new XMLHttpRequest();

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
		h3 = createNode('h3');

		img.src = data.sprites.front_default;
		img2.src = data.sprites.front_shiny;
		//h3.innerHTML = `Height:${data.height} Weight:${data.weight} Base EXP:${data.base_experience}`;
		h3.innerHTML = "Height: " + data.height +  "&emsp;Weight: " + data.weight + "&emsp;BaseXP: " + data.base_experience;

		append(li,img);
		append(li, img2);
		append(li, h3);
		append(ul,li);
	}
}
xhr.open('GET', 'http://pokeapi.salestock.net/api/v2/pokemon/6/', true);
xhr.send(null);