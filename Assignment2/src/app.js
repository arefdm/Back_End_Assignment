import 'dotenv/config'
import { getTableData } from './model/get_data.js';
import { rssReader } from './rss_reader/rssReader.js';
import { emailSender } from './email/email_sender.js';

const rssUrl = await getTableData('public', 'rss_feeds');
const rss = await Promise.all(rssUrl.map(async (rss) =>{
    return await rssReader(rss.rss_url);
}));
const rssHtml = rss.join('');
const recipients = await getTableData('public','recipients');
const recipientEmails = recipients.map(recipient => recipient.email);
const sendingEmail = emailSender(recipientEmails,rssHtml);