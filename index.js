import experss from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = experss();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(8000, () => console.log('Running server on port localhost:8000'));