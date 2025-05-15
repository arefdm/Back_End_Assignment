import 'dotenv/config'
import { getTableData } from './model/get_data.js'

const emails = await getTableData('public','recipients');
console.log(emails);
const rssUrl = await getTableData('public', 'rss_feeds');
console.log(rssUrl);