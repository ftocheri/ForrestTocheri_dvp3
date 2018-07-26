//function used to create an html element
function createNode(element)
{
	return document.createElement(element);
}

//function used to append and element to the parent element
function append(parent,el)
{
	return parent.appendChild(el);
}

//creating a random int between 0-649
var num = getRandomInt(649);

//make sure that the int doesnt land on 0
//if it does, add 1
if(num == 0)
{
	num + 1;
}

//function that will generate a random int
function getRandomInt(max)
{
	return Math.floor(Math.random() * Math.floor(max));
}

//create a constant variable of the list section
const ul = document.getElementById("pokemon");

//fetch request on our chosen Pokemon API
fetch('http://pokeapi.salestock.net/api/v2/pokemon/' + num + '/')
	//turn our response into json format
	.then((resp) => resp.json())
	//run our custom function with that data
	.then(function(data)
	{
		//change the header to the Pokemon chosen
		document.querySelector('body h2').innerHTML = `${data.name} #${data.id}`;
		//create nodes for each of our created info
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

		//create a variable that will save our HTML information
		//created because some Pokemon have multiple types
		var typeInfo = '';
		//check if the Pokemon selected has multiple types
		for(var i = 0; i < data.types.length; i++)
		{
			//format accordingly
			if(data.types.length > 1 && i == 0)
			{
				typeInfo += data.types[i].type.name + "/";
			}
			else
			{
				typeInfo += data.types[i].type.name;
			}
		}

		//set the data to our pulled information

		//set the first sprite image
		img.src = data.sprites.front_default;
		//set the second sprite image
		img3.src = data.sprites.back_default;
		//third sprite image
		img2.src = data.sprites.front_shiny;
		//fourth sprite image
		img4.src = data.sprites.back_shiny;
		//update the html for headers
		p.innerHTML = "Normal Sprite";
		p2.innerHTML = "Shiny Sprite";
		p3.innerHTML = "Information";
		//add the types into the html
		type.innerHTML = "Type: " + typeInfo + "<br />";
		//populate the information with labels
		h3.innerHTML = "Height: " + data.height +  "&emsp;Weight: " + data.weight + "&emsp;BaseXP: " + data.base_experience;

		//append all the elements to the list
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
	})
	//catch any errors the code runs into
	.catch(function(error)
	{
		//log those errors into the console
		console.log(error);
	}
);
