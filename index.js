'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Mailgun = require('mailgun').Mailgun;
const mg = new Mailgun('key-12a25cdbbfe8b402aca6b53fb89f3f80');

app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/sendmail', (req, res) => {
    mg.sendText('contactform@mikebobadilla.com',
        'mike.c.bobadilla@gmail.com',
        "Contact Form Submission From " + req.body.name,
        "Name: " + req.body.name + "\n\n" + "Email: " + req.body.email + "\n\n Phone: " + req.body.phone + "\n\n" + req.body.message,
        function(err){
          if(err){
            console.err(err);
            return err;
          } else {
              res.send("Thanks for contacting me! I'll be in touch.!")
          }
        }
    );
});

const server = app.listen(8080, ()=> {
    let port = server.address().port;
    console.log(`Server is running at ${port}`);
});
