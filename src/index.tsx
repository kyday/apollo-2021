import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import client from "./apollo/apollo";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
