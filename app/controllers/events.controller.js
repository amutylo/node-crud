module.exports = {
    //show all events
    showEvents: (req, res) => {
        //create dummy data
        const events = [
            {name: 'Basketball', slug: 'basketball', description: 'Throwing a ball into a basket.'},
            {name: 'Swimming', slug:'swimming', description: 'Michel Felphs is fast fish ever.'},
            {name: 'Weightlifting', slug: 'weightlifting', description: 'Lifting heavy things up.'}
        ];
        //return a view with data
        res.render('pages/events', {events: events});
    },

    showSingle: (req, res) => {
        const event = {name: 'Basketball', slug: 'basketball', description: 'Throwing a ball into a basket.'};

        res.render('pages/single', {event: event});
    }
};
