import React from "react";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client';
import BooksList from "./Components/Books";
import BookDetail from "./Components/Books/detail";

function App() {

  const client = new ApolloClient({
    uri: "http://localhost:4001/graphql",
    cache: new InMemoryCache()
  })

  return (
    <>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<BooksList/>} />
          <Route path="/book/:id" element={<BookDetail/>} />
      </Routes>
      </ApolloProvider>
    </>
  );
}

export default App;
