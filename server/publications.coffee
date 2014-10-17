Motd = new Meteor.Collection "motd"

Meteor.methods
  setMotd: (msg) ->
    if msg is ""
      Motd.remove({})
    else
      Motd.insert {text: msg}


Meteor.publish "motd", ->
  Motd.find()
