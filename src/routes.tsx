import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import CommissionDashboard from './pages/CommissionDashboard';
import CommissionDashboardManagement from './pages/CommissionDashboardManagement';
import RefundDashboard from './pages/RefundDashboard';

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/commission-dashboard" element={<CommissionDashboard />} />
        <Route
          path="/commission-dashboard-management"
          element={<CommissionDashboardManagement />}
        />
        <Route path="/refund-dashboard" element={<RefundDashboard />} />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
