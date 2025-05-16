import {EMAIL_SECRETS} from '../config.js';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport(EMAIL_SECRETS);

export async function emailSender(emails, html){
    try {
        const emailInfo = await transport.sendMail({
            to : emails.join(', '),
            subject : 'rss feeds',
            html : html
        });
    } catch (error) {
        console.error(error);
    }
};
