import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config()

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = twilio(accountSid, authToken);

client.messages
    .create({
        body: 'Your appointment is coming up on July 21 at 3PM',
        from: process.env.twilioNumber,
        to: process.env.toNumber
    })
    .then(message => console.log(message.sid))