 
"use strict";
$(document).ready(function(){
            
            $('#searchMovie').click(function(e){
                e.preventDefault(); 
                var name = document.getElementById("movieName").value; 
                $.ajax({
  
                    url:"http://www.omdbapi.com/?s="+name,
                    dataType: "jsonp",
                    jsonpCallback: "searchResults"
                });
                
            });
 });
        
        
    function searchResults(json){
             console.log(json);
             console.log(json.Response);
             if(json.Response === "True") {
                    var out = "<table id='dynTable' class='row'><caption>Movie List</caption><tr class='head'><td class='col-4'>MovieTitle</td><td class='col-4'>Type</td><td class='col-4'>Year</td></tr>";
                   for (var i = 0; i < json.Search.length; i++) {

                        out += "<tr ><td class='col-4'>" +
                    json.Search[i].Title +
                    "</td><td class='col-4'>" +
                    json.Search[i].Type +
                    "</td><td class='col-4'>" +
                    json.Search[i].Year+
                    "</td></tr>";
                    }
                        out += "</table>";
                document.getElementById("results").innerHTML = out;
             }else{
                 
                  $("#dynTable").remove();
                 alert(json.Error);
             }
    }
        
        