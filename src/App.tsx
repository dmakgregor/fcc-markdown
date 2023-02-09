import React from 'react';
import Layout from './components/layout/Layout';
import { Editor, Preview } from './features/markdown';

const App = () => (
  <Layout>
    <Editor />
    <Preview />
  </Layout>
);

export default App;
