import Parser from 'rss-parser';

const parser = new Parser();

export async function rssReader(url){
    const feed = await parser.parseURL(url);
    
    const rssItems = feed.items.map(item =>
        `
        <h3>${item.title}</h3>
        <p>${item.contentSnippet}</P>
        <p>${item.pubDate}</p>
        <hr/>
        `
    ).join('');
    return `
    <h2>${feed.title}</h2>
    ${rssItems}
    `;
};