$(document).ready(function(){
  console.log("im that muthafucking script")

  firstStick()
})

function firstStick(){
  $(window).scroll( () => {
    if ($(window).scrollTop() > 140){
      $('#headshot').fadeOut('slow')
    } else {
      $('#headshot').fadeIn('slow')
    }
  })
}
