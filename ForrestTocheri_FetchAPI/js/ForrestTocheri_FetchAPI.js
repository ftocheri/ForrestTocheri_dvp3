function createNode(element)
{
	return document.createElement(element);
}

function append(parent,el)
{
	return parent.appendChild(el);
}

const ul = document.getElementById("pokemon");
const url = 'http://pokeapi.co/api/v2/pokemon/1';

fetch(url, {mode:'no-cors'})
.then((resp) => resp.json())
.then(function(data)
{
	let pokemon = data;

	return pokemon.map(function(poke)
	{
		let li = createNode('li'),
		img = createNode('img'),
		span = createNode('span');

		img.src=poke.sprites;
		span.innerHTML=poke.name;

		append(li,img);
		append(li,span);
		append(ul,li);
	})
})

.catch(function(error)
{
	console.log(error);
});