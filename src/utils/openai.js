import OpenAI from 'openai';
import {OPENAI_KEY} from  '../utils/Constants'

const openai = new OpenAI({
  apiKey: OPENAI_KEY,dangerouslyAllowBrowser: true///process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export default openai;