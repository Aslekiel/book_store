import { Routes, Route } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

import Login from '../components/LogIn/LogIn';
import SignUp from '../components/SignUp/SignUp';

import { AppContainer } from './App.styles';
import { Cart } from '../components/Cart/Cart';
import { UserProfile } from '../components/UserProfile/UserProfile';
import { Catalog } from '../components/Catalog/Catalog';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';

function App() {
  const isToken = localStorage.getItem('accessToken');

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Main isToken={isToken} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<ProtectedRoute isToken={isToken} redirectPath={'/'} children={<Cart />} />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route
          path="/user-profile"
          element={<ProtectedRoute isToken={isToken} redirectPath={'/'} children={<UserProfile />} />
          } />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
