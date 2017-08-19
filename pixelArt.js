let colors = ["gold", "deeppink","darkorange", "cadetblue", "mediumorchid", "mediumseagreen", "limegreen", "tomato", "skyblue", "slategrey", "yellow", "darkred", "dodgerblue", "crimson", "lightpink", "khaki"];
let brushColor;

https://stackoverflow.com/questions/1104344/what-is-the-difference-between-the-mouseover-and-mouseenter-events  --mouseover has bubbling issues.


$(document).ready(function(){
var pressed = false;
  // for (let k =0; k<3; k++){
  //   $(".colorSample").css("background-color", brushColor
  //   });


// MAKE GRID
  for(let i=0; i<20; i++){
      $(".pixelHolder").append("<div class = 'row'><div>");
        for(let j=0; j<40; j++){
          $(".row").append("<div class = 'pixel'><div>")
        }
    }
//for later: fix extra divs that are being made...
//MOUSE STUFF
    $(".pixel").on("mousedown", function(){
      pressed = true;
      $(event.target ).css( "background-color", brushColor);
    });


    $(".pixel").on("mouseenter", function(){
      if(pressed === true){
        $(event.target ).css( "background-color", brushColor);
      }
    });

    $(".pixel").on("mouseup", function(){
      pressed = false;
      //$(event.target ).css( "background-color", null);
    });


    $("#brush1").on("click", function(){
      brushColor = "limegreen";
      $(event.target).css("border", "3px solid blue");

    });

    $("#brush2").on("click", function(){
      brushColor = "red";
      //$(event.target).css("border", "3px solid blue");
    });

    $("#brush3").on("click", function(){
      brushColor = "cornflowerblue";
      //$(event.target).css("border", "3px solid blue");
    });

    $("#brush4").on("click", function(){
      brushColor = "white";
      //$(event.target).css("border", "3px solid blue");
      $
    });
    $("#brush5").on("click", function(){
      brushColor = "yellow";
      //$(event.target).css("border", "3px solid blue");
    });

    $("#brush6").on("click", function(){
      brushColor = "deeppink";
      //$(event.target).css("border", "3px solid blue");

    });
    $("#brush7").on("click", function(){
      brushColor = "gold";
      //$(event.target).css("border", "3px solid blue");

    });


});


    // randomColors(arr){
    //
    // // for(let c = 0; c<colors.length; c++){
    // brushColor = colors[Math.floor(Math.random()*3 )]
    // console.log(brushColor);
    // }
