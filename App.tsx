import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import InventoryDashboard from 'screens/InventoryDashboard';
import FinanceManagement from 'screens/FinancialManagement';
import AISupplierScreen from 'screens/AISupplierScreen';
import Homepage from 'screens/Homepage';

export default function App() {
  return (
    <>
      {/* <InventoryDashboard></InventoryDashboard> */}
      {/* <FinanceManagement></FinanceManagement> */}
      {/* <AISupplierScreen></AISupplierScreen> */}
      <Homepage></Homepage>
    </>
  );
}


