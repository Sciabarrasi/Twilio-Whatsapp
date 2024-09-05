import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config()

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = twilio(accountSid, authToken);

client.messages
    .create({
        body: 'Your appointment is coming up on July 21 at 3PM',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5493404633790'
    })
    .then(message => console.log(message.sid))