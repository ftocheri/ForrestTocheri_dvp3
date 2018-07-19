document.querySelector('form h2').innerHTML = "<strong>Contact</strong>Me";
var d = document.querySelectorAll('form p');
d[0].innerHTML = "Let me know of any updates or errors that I have made while discussing these games. Also, if there is a topic you would like me to cover in the future.";
document.body.style.backgroundImage = "url('https://wallpapertag.com/wallpaper/full/b/e/4/342028-game-background-2560x1440-for-windows.jpg')";
d[1].innerHTML = "<label for='tag'>tag</label><input type='text' name='tag' id='tag' class='required' placeholder='Tag' />";
d[3].innerHTML = "<label for='fgame'>Favorite Game</label><input type='text' name='fgame' id='phone' class='required' placeholder='Favorite Game' />";
var btn = document.querySelector('body button');
btn.setAttribute('class', 'disabled');

function validateForm(event)
{
	event.preventDefault();

	var form = document.querySelector('form');
	var fields = form.querySelectorAll('required');

	var valid = true;

	for(var i = 0; i < fields.length; i++)
	{
		if(!fields[i].value)
		{
			valid = false;
		}
	}

	if(valid == true)
	{
		var submit = form.querySelector('[type = submit]');
		submit.removeAttribute('class');
	}
}

function validateRequired(event)
{
	var target = event.target;
	var parent = target.parentElement;
	var error = '<label class="error">This field is required!</label>';

	if(!target.value.length)
	{
		if(!parent.querySelector('.error'))
		{
			parent.insertAdjacentHTML('beforeend', error);
		}
	}
	else
	{
		parent.removeChild(parent.querySelector('.error'));
	}
}

var requiredFields = document.querySelectorAll('form .required');
for(var i = 0; i < requiredFields.length; i++)
{
	requiredFields[i].addEventListener('input', validateForm);
	requiredFields[i].addEventListener('blur', validateRequired);
}

function send(event)
{
	event.preventDefault();

	var form = document.querySelector('form');
	var message = '<h2>Thank You!</h2><p>Your message is important to me!</p>';

	var target = event.target;
	var disabled = target.classList.contains('disabled');

	if(disabled === false)
	{
		form.innerHTML = message;
	}
}

var submit = document.querySelector('[type=submit]');
submit.addEventListener('click', send);