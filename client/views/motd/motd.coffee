Motd = new Meteor.Collection("motd");
Motd.find().observeChanges
  removed: () ->
    Session.set("motd", undefined)
  added: (id, motd) ->
    Session.set("motd", motd.text)

Template.motd.helpers
  motd: -> Session.get("motd")

Template['motd-admin'].helpers
  motd: -> Session.get("motd")

Template['motd-admin'].events
  "click button": (e, tmpl) ->
    Meteor.call "setMotd", $(tmpl.find("textarea")).val()
