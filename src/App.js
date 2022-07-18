import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          {/* <Sidebar /> */}
        </div>
        {/* <div className="col-span-10"> */}
        <div className="col-span-12">
          <Dashboard />

        </div>
      </div>
    </>
  );
}

export default App;
