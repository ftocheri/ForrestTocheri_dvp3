function createNode(element)
{
	return document.createElement(element);
}

function append(parent,el)
{
	return parent.appendChild(el);
}

const ul = document.getElementById("pokemon");
const url = 'http://pokeapi.salestock.net/api/v2/pokemon/6/';

fetch(url)
.then((resp) => resp.json())
.then(function(data)
{
	let pokemon = data.forms;

	return pokemon.map(function(poke)
	{
		let li = createNode('li'),
		img = createNode('img'),
		span = createNode('span');

		img.src=poke.front_default;
		span.innerHTML=`${poke.name} ${poke.id}`;

		append(li,img);
		append(li,span);
		append(ul,li);
	})
})

.catch(function(error)
{
	console.log(error);
});