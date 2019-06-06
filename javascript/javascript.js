$(document).ready(function() {
  var initialButtons = [
    "table",
    "chairs",
    "bed",
    "dresser",
    "oven",
    "mirror",
    "shelves",
    "tv",
    "sofa",
    "cabinets",
    "nightstand",
    "refrigerator"
  ];

//inital populate buttons 
function createButtons(){
for (var i = 0; i < initialButtons.length; i++){
    var btn = $("<button>");
    btn.addClass("item");
    btn.addClass("gif-bttn");
    btn.text(initialButtons[i]);
    btn.attr("data-name", initialButtons[i]);
    $("#buttons").append(btn);
}
// createButtons();
console.log("test");
}

$(document).on("click", ".gif-bttn", function(){
    var term = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=315PuYPlYjZVGjL5Q4Epu5pnOajdvhAR";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response)
        
       var results = response.data;
  
        for(var i = 0; i<results.length; i++){
  
          var imgDiv = $("div");
          var p = $("<p>").text("Rating: " + results[i].rating);
          var gif = $("<img>");
          imgDiv.append(p);
          imgDiv.append(gif);
          $("#gif-box").prepend(imgDiv);
        }
    });
  })
  createButtons();
  console.log("test");
});


 //populate display
  
    
        


     



console.log("test");
