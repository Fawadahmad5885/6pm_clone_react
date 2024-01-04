import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Password from './components/Password';
import Account from './components/Account';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/password' element={<Password />} />
        <Route path='/account' element={<Account />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
