// require('dotenv').config();

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//     body: 'A police report has been filed against you for the alleged theft of items including a "plastic Dabba" and a "steel chamcha." and "30 INR", This falls under Section 378. Please address this matter urgently.',
//     from: '+14845099899',
//     to: '+917499545892',
//   })
//   .then((message) => console.log(message.sid))
//   .catch((error) => {
//     console.log(error);
//   });

// * FAST TWO SMS

// const { response } = require('express');
// const { response } = require('express');
const fast2sms = require('fast-two-sms');
// const express = require('express');

// const app = express();
const API_KEY = 'fWV20yt5goLc6hYaPKJnbhc2cucqZTarE7DzzUz0fFayKAGYmefL5q1JvAzT';

var options = {
  authorization: API_KEY,
  message: 'YOUR_MESSAGE_HERE',
  numbers: ['8459324821', '8888888888'],
};
if (fast2sms && fast2sms.sendMessage) {
  fast2sms
    .sendMessage(options)
    .then((response) => {
      console.log('SMS sent successfully:', response);
    })
    .catch((error) => {
      console.error('Error sending SMS:', error);
    });
} else {
  console.error('fast2sms or sendMessage is not defined');
}
