
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
// firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword"
// https://firebase.google.com/docs/functions/config-env

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});

// Your company name to include in the emails
// TODO: Change this to your app or company name to customize the email sent.
const APP_NAME = 'Organic Meal Prep';

// [START sendTestEmail]
/**
 * Sends a Test email.
 */
// [START onRequestTrigger]
exports.sendTestEmail = functions.database.ref(`messages/{messageId}`)
.onWrite(event => {
    let firstname = event.data.child('firstname').val();
    let lastname = event.data.child('lastname').val();
    let streetAddress = event.data.child('streetAddress').val();
    let city = event.data.child('city').val();
    let state = event.data.child('state').val();
  

    let test = {
        email: 'samualtarpenning@gmail.com',
        firstname: '',

    
        somethingElse: 'something else'
    }

    return sendEmail('samualtarpenning@gmail.com', firstname, lastname, streetAddress, city, state);

});


// Sends email.
function sendEmail(email, firstname, lastname, streetAddress, city, state) {
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
    };

    // Sending Email
    mailOptions.subject = `New Customer sign-up for ${APP_NAME}!`;
    mailOptions.text = 
  `First Name: ${firstname || ''} 
   Last Name: ${lastname}. 
   City: ${city}
   
   Address: ${streetAddress}`;
    return mailTransport.sendMail(mailOptions).then(() => {
        let message = 'Email sent to: ' + email;
        console.log(message);
        return res.status(200).send({ message: message });
    }).catch((err) => {
        console.log(err);
        return res.status(400).send({ error: err });
    });
}