// $(document).ready(function(){
//   $("a").on('click', function(event){
//     console.log("Harambe")
//     if(window.hash == window.top){
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: $(window.hash).offset().top
//       }, 800, function(){
//         window.location.hash = hash;
//       });
//     }
//   });
// });

$(document).ready(function(){
  $('a[href^="#"]').on('click',function(e){
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);
    var top = $target.offset().top - 82

    $('html, body').animate({
      'scrollTop': top
    }, 1000, 'swing'
    );
  });
});

$(".link").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});
