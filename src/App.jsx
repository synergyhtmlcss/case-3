
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/header/Header';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { TablePage } from './pages/TablePage';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Container sx={{marginTop: '80px'}} maxWidth="xl">
          <Routes>
          <Route path='/' element={<LoginPage/>} />
            <Route path='/table' element={<TablePage/>} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
