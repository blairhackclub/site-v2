const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY // TODO: use a read-only API key => https://support.airtable.com/hc/en-us/articles/360056249614-Creating-a-read-only-API-key
});
const base = Airtable.base('appnIz7LK3v8oRHXR');

export default base;