document.querySelector('form h2').innerHTML = "<strong>Contact</strong>Me";
var d = document.querySelectorAll('form p');
d[0].innerHTML = "Let me know of any updates or errors that I have made while discussing these games. Also, if there is a topic you would like me to cover in the future.";
document.body.style.backgroundImage = "url('https://wallpapertag.com/wallpaper/full/b/e/4/342028-game-background-2560x1440-for-windows.jpg')";
d[1].innerHTML = "<label for='tag'>tag</label><input type='text' name='tag' id='tag' class='required' placeholder='Tag' />";
d[3].innerHTML = "<label for='fgame'>Favorite Game</label><input type='text' name='fgame' id='phone' class='required' placeholder='Favorite Game' />";

document.querySelector('form button').disabled = true;

