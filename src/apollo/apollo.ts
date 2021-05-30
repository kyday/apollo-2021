import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ey9vo.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

export default client;
