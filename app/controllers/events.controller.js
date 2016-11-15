const Event = require('../models/event')

module.exports = {
    //show all events
    showEvents: (req, res) => {
        //get all events

        //return a view with data
        res.render('pages/events', {events: events});
    },

    showSingle: (req, res) => {
        const event = {name: 'Basketball', slug: 'basketball', description: 'Throwing a ball into a basket.'};

        res.render('pages/single', {event: event});
    },

    seedEvents: (req, res) => {
      //create event
      const events = [
          {name: 'Basketball', description: 'Throwing a ball into a basket.'},
          {name: 'Swimming', description: 'Michel Felphs is fast fish ever.'},
          {name: 'Weightlifting', description: 'Lifting heavy things up.'}
      ];

      //save event
      for (event of events) {
        var newEvent = new Event(event);
        newEvent.save();
      }
      //show message event seeded.
      res.send('DB seeded!')
    }
};
