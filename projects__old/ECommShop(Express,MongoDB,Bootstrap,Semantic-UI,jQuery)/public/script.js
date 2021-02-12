const buttons = document.querySelectorAll( '.styled-btn' );

Array.prototype.slice.call( buttons ).forEach( function( button ) {

	button.addEventListener( 'mouseenter', () => {
			button.setAttribute( 'zoom-effect', '' );
  });
  button.addEventListener( 'mouseleave', () => {
    button.removeAttribute( 'zoom-effect', '' );
  })

});

$('.special.cards .image').dimmer({
  on: 'hover'
});