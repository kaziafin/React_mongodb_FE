import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserForm from './component/UserForm';
import Users from './component/Users';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<UserForm />} />
        <Route path="/user" element={<Users />} />
     </Routes>
  
    </div>
  );
}

export default App;
