import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hello: async () => {
        return 'Hello again';
      },
      hi: () => {
        return 'Hi';
      },
    },
  },
});

// const PORT = 4005;

server.listen(4003).then(({ url }) => {
  console.log(`Iniciou na porta ${url}`);
});
