import fastify from 'fastify';

const app = fastify();

app.get('/', () => {
  return { status: 'Ok' };
});

app.listen({ port: 3333 }).then((url) => {
  console.log(`Server listen ${url}`);
});
