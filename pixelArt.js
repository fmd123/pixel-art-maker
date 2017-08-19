let colors = ["gold", "deeppink","darkorange", "cadetblue", "mediumorchid", "mediumseagreen", "limegreen", "tomato", "skyblue", "slategrey", "yellow", "darkred", "dodgerblue", "crimson", "lightpink", "khaki"];
let brushColor;
// someColors(colors){
//   for(let l=0; l<3; l++){
//     for(let c = 0; c<colors.length; c++){
//       sampleColor[i] = color[Math.floor(Math.random()*3 )]
//     }
//     console.log(sampleColor[i]);
//   }
$(document).ready(function(){

  // for (let k =0; k<3; k++){
  //   $(".colorSample").css("background-color", brushColor
  //   });


// MAKE GRID
  for(let i=0; i<10; i++){
      $(".pixelHolder").append("<div class = 'row'><div>");
        for(let j=0; j<10; j++){
          $(".row").append("<div class = 'pixel'><div>")
        }
    }
    $(".pixel").on("mouseenter", function(){
        $(event.target ).css( "background-color", brushColor);
    });

    $("#brush1").on("click", function(){
      brushColor = "chartreuse";
    });

    $("#brush2").on("click", function(){
      brushColor = "red";
    });

    $("#brush3").on("click", function(){
      brushColor = "cornflowerblue";
    });
    $("#brush4").on("click", function(){
      brushColor = "white";
    });


});
