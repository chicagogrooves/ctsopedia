(function(){
Template.__checkName("resultsPage");
Template["resultsPage"] = new Template("Template.resultsPage", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("search")), "\n  ", HTML.DIV({
    id: "results"
  }, "\n    ", Spacebars.include(view.lookupTemplate("results")), "\n  ") ];
}));

Template.__checkName("results");
Template["results"] = new Template("Template.results", (function() {
  var view = this;
  return HTML.Raw('<div class="result">\n    Result 1\n  </div>\n  <div class="result">\n    Result 2\n  </div>\n  <div class="result">\n    Result 3\n  </div>\n  <div class="result">\n    Result 4\n  </div>');
}));

})();
