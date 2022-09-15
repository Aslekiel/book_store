import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
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
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, []);

  return (
    <AppContainer>
      <Header auth={auth} />
      <Routes>
        <Route path="/" element={<Main auth={auth} />} />
        <Route path="/login" element={
          (<ProtectedRoute redirectPath="/user-profile" auth={!auth}>
            <Login />
          </ProtectedRoute>)}
        />
        <Route path="/signup" element={
          (<ProtectedRoute redirectPath="/user-profile" auth={!auth}>
            <SignUp />
          </ProtectedRoute>)}
        />
        <Route path="/cart" element={
          (<ProtectedRoute redirectPath="/" auth={auth}>
            <Cart />
          </ProtectedRoute>)}
        />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/user-profile" element={
          (<ProtectedRoute redirectPath="/" auth={auth}>
            <UserProfile />
          </ProtectedRoute>)}
        />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
