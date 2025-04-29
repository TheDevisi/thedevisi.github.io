import React from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './hooks/useTheme';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;