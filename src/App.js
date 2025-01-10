import logo from './logo.svg';
import './App.css';
import RemainItems from './pages/admin/remain_items1';
import BorrowedItems from './pages/admin/borrowed_items2';
import Sidebar from './pages/admin/sidebar';
import RegistrationPage from './pages/user/Register.js';


function App() {
  return (
    <div className="App">
      <main>
        <Sidebar/>
      </main>
    </div>
  );
}

export default App;
