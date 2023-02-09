import React from 'react';
import Layout from './components/layout/Layout';
import Editor from './features/editor';
import Preview from './features/previewer';

const App = () => (
  <Layout>
    <Editor />
    <Preview />
  </Layout>
);

export default App;
