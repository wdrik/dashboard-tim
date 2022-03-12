import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

import CommissionDashboard from './pages/CommissionDashboard';

import './assets/styles/global.css';

function App() {
  return (
    <Container maxWidth="xl">
      <Router>
        <Routes>
          <Route path="/" element={<CommissionDashboard />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
