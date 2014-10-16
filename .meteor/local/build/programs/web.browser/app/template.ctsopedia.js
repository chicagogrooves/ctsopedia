(function(){
Template.body.addContent((function() {
  var view = this;
  return "";
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("search");
Template["search"] = new Template("Template.search", (function() {
  var view = this;
  return HTML.FORM(HTML.Raw('\n    <div id="banner">\n      <h1><img src="/img/opedia_logo.png" alt="ctsOpedia"></h1>\n    </div>\n    '), HTML.DIV({
    id: "search"
  }, "\n      ", Spacebars.include(view.lookupTemplate("searchInput")), "\n    "), "\n    ", HTML.DIV({
    id: "buttons"
  }, "\n      ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n      ", HTML.Raw("<button>Search Our Brains</button>"), "\n    "), "\n  ");
}));

Template.__checkName("searchInput");
Template["searchInput"] = new Template("Template.searchInput", (function() {
  var view = this;
  return HTML.Raw('<input type="search" name="ctsSearch">');
}));

})();
