const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});

// Parallax effect
if('ontouchstart' in window == false){
  $('body').mousemove(function(e){
    var moveX = (e.pageX * -1 / 25);
    var moveY = (e.pageY * -1 / 25);
    $('.outer').css('background-position', moveX + 'px ' + moveY + 'px');
  });
}

