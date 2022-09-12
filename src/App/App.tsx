import { Routes, Route } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

import Login from '../components/LogIn/LogIn';
import SignUp from '../components/SignUp/SignUp';

import { AppContainer } from './App.styles';
import { Cart } from '../components/Cart/Cart';
import { UserProfile } from '../components/UserProfile/UserProfile';

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
