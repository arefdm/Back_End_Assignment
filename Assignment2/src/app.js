import 'dotenv/config'
import { getTableData } from './model/get_data.js'
import { rssReader } from './rss_reader/rssReader.js'

// const emails = await getTableData('public','recipients');
// console.log(emails);
const rssUrl = await getTableData('public', 'rss_feeds');
console.log(rssUrl);
const rssHtml = await Promise.all(rssUrl.map(async (rss) =>{
    return await rssReader(rss.rss_url);
}));
console.log(rssHtml.join(''));