import React from "react";

import { Layout, Container } from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <Container dark={false}>
      <h1>NOT FOUND</h1>
      <p>The page you are looking for doesn't exist.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
