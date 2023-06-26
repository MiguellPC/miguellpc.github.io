import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_REACT_APP_HYG_API,
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${
      import.meta.env.VITE_REACT_APP_HYG_AUTH
    }`,
  },
});

export default client;
