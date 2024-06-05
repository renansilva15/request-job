import fastify from 'fastify';
import { scheduler } from './scheduler';
import { requestJob } from './request-job';

const app = fastify();

app.get('/', () => {
  return { status: 'Ok' };
});

app.listen({ port: 3333 }).then((url) => {
  console.log(`Server listen ${url}`);
});

const URLS = [
  'https://freemailer-api.onrender.com/api',
  'https://freemailer-ms-email.onrender.com/',
];

const scheduleURLs = async (urls: string[]) => {
  for (const url of urls) {
    await scheduler(url, requestJob, { url }, 1000 * 60 * 14);
  }
};

scheduleURLs(URLS).catch((error) => {
  console.error('Error scheduling URLs:', error);
});
