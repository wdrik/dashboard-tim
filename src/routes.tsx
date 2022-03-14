import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import CommissionDashboard from './pages/CommissionDashboard';
import CommissionManagementDashboard from './pages/CommissionManagementDashboard';
import RefundDashboard from './pages/RefundDashboard';
import RefundManagementDashboard from './pages/RefundManagementDashboard';
import VariableCompensationDashboard from './pages/VariableCompensationDashboard';

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/commission-dashboard" element={<CommissionDashboard />} />

        <Route
          path="/commission-management-dashboard"
          element={<CommissionManagementDashboard />}
        />

        <Route path="/refund-dashboard" element={<RefundDashboard />} />

        <Route
          path="/refund-management-dashboard"
          element={<RefundManagementDashboard />}
        />

        <Route
          path="/variable-compensation-dashboard"
          element={<VariableCompensationDashboard />}
        />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
