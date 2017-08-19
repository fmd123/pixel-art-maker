
$(document).ready(function(){
  for(let i=0; i<10; i++){
      $(".pixelHolder").append("<div class = 'row'><div>");
        for(j=0; j<10; j++){
          $(".row").append("<div class = 'pixel'><div>")
        }
    }
    $(".pixel").on("click", function(){
        $(event.target ).css( "background-color", "red");
    })


});
