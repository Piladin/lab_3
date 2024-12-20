import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header /> {/* Pasek nawigacyjny */}
          <Routes>
            <Route path="" element={<Navigate to="/login" />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;