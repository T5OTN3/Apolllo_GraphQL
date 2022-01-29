import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client';
import BooksList from "./Components/Books";

function App() {

  const client = new ApolloClient({
    uri: "http://localhost:4001/graphql",
    cache: new InMemoryCache()
  })

  return (
    <>
      <ApolloProvider client={client}>
        <BooksList></BooksList>
      </ApolloProvider>
    </>
  );
}

export default App;
