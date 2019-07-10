/* automatically focus on search field 
window.onload = function() {
  document.getElementById("searchField").focus();
};*/

/* trigger search on enter*/
document.getElementById('wikiSearch').addEventListener('submit', function(e) {
    search(document.getElementById('searchField'));
    e.preventDefault();
}, false);

$('#searchField').keypress(function (e) {                                       
       if (e.which == 13) {
            e.preventDefault();
         document.getElementById("searchButton").click();
       }
});

/* search wikipedia */
function getSearch() {
  //get user input
  var x = document.getElementById("wikiSearch");
  var text = "";
  text += x.elements[0].value;
  
  //create paragraph to confirm search term
  var para = document.createElement("p");
  var searchP = document.createTextNode("Search results for: " + text);
  para.appendChild(searchP);
  document.getElementById("confirmSearch").appendChild(para);

  //base of url for wikipedia query
  var wikiSearchUrl =
    "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" +
    text +
    "&callback=?";
  
  //call wikipedia api
  $.ajax({
    url: wikiSearchUrl,
    type: "GET",
    async: false,
    dataType: "jsonp",
    success: function(data, status, jqXHR) {
      
      //access search list in query
      var wikiQuery = data.query.search;
      var resultsList = [];
      //create title, pageid, and snippet for each search result
      for (i = 0; i < wikiQuery.length; i++) {
        resultsList[i] = {
          title: wikiQuery[i].title,
          pageid: wikiQuery[i].pageid,
          snippet: wikiQuery[i].snippet
        };
        //create variables for article title, excerpt, and link
        var articleTitle = resultsList[i].title;
        var articleSnippet = resultsList[i].snippet;
        //turn pageid into link from article
          var articleURL =
          "http://en.wikipedia.org/?curid=" + resultsList[i].pageid;
         //add results to page
       document.getElementById("wikiResults").innerHTML += "<div class='card'><div class='card-block'><h4 class='card-title'>" + articleTitle + "</h4><p class='card-text'>" + articleSnippet + "...</p><a class='card-link' href='" + articleURL + "'>Read more on Wikipedia</a></div></div>";
      }
      
      console.log(resultsList);
    },
    error: function(request, error) {
      console.log(arguments);
      alert("error " + error);
    }
  });
}
