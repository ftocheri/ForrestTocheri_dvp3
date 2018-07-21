//change the header text
document.querySelector('form h2').innerHTML = "<strong>Contact</strong>Me";
//save the p selection of the form to an array
var d = document.querySelectorAll('form p');
//change the text displayed above the form
d[0].innerHTML = "Let me know of any updates or errors that I have made while discussing these games. Also, if there is a topic you would like me to cover in the future.";
//update the background image to my own
document.body.style.backgroundImage = "url('https://wallpapertag.com/wallpaper/full/b/e/4/342028-game-background-2560x1440-for-windows.jpg')";
//change some of the form fields to something that fits my theme
d[1].innerHTML = "<label for='tag'>tag</label><input type='text' name='tag' id='tag' class='required' placeholder='Tag' />";
d[3].innerHTML = "<label for='fgame'>Favorite Game</label><input type='text' name='fgame' id='fgame' class='required' placeholder='Favorite Game' />";
d[4].innerHTML = "<textarea name='message' id='message' class='required' cols='30' rows='10' placeholder='Message'></textarea>";
//save the selection of the button
var btn = document.querySelector('body button');
//disable the button from the DOM
//this is used because our custom 'disabled' class does not prevent clicking
btn.disabled = true;
//change the class to the custom disabled class
btn.setAttribute('class', 'disabled');

//create a custom event method to check if the forms is valid
//will check each box for text values
function validateForm(event)
{
	event.preventDefault();

	//save the selection of the form to a variable
	var form = document.querySelector('form');
	//save the selection of the required fields to an array
	var fields = form.querySelectorAll('.required');

	//set a default value that will be used in an if statement
	var valid = true;

	//check each box that has the required tag
	for(var i = 0; i < fields.length; i++)
	{
		//check that the field has a value
		//if it does not
		if(!fields[i].value)
		{
			//valid is false
			valid = false;
		}
	}

	//if valid is true by the end
	//each box should have a value
	if(valid == true)
	{
		//remove our disabled class from the button
		btn.removeAttribute('class');
		//set the disabled property to false
		btn.disabled = false;
	}
}

//custom function that will display a custom message if the box is invalid
function validateRequired(event)
{
	//save each box as a target
	var target = event.target;
	//save the parent of the target
	//will be used for an area to display the message
	var parent = target.parentElement;
	//save our message html text
	var error = '<label class="error">This field is required!</label>';

	//check if the target has value
	if(!target.value.length)
	{
		//check that the parent doesnt have the error message already
		if(!parent.querySelector('.error'))
		{
			//insert the error message if not already there
			parent.insertAdjacentHTML('beforeend', error);
		}
	}
	else
	{
		//if there is value
		//remove the error message
		parent.removeChild(parent.querySelector('.error'));
	}
}

//save a variable for the required fields
//required fiels have a class of required
var requiredFields = document.querySelectorAll('.required');
//iterate through the array we just created
for(var i = 0; i < requiredFields.length; i++)
{
	//acdd our custom event methods to the specific locations
	requiredFields[i].addEventListener('input', validateForm);
	requiredFields[i].addEventListener('blur', validateRequired);
}

//create a custom method to display a page after the user enters the data
function send(event)
{
	event.preventDefault();

	//save the form to a variable
	var form = document.querySelector('form');
	//create a custom html message that will display
	var message = '<h2>Thank You!</h2><p>Your message is important to me!</p>';

	//save a variable for the disabled class list
	var disabled = form.classList.contains('disabled');

	//if there is no disabled in the form
	if(disabled === false)
	{
		//display our message
		form.innerHTML = message;
	}
}

//var submit = document.querySelector('[type=submit]');
btn.addEventListener('click', send);