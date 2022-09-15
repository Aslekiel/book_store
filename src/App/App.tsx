import { Routes, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

import Login from '../components/LogIn/LogIn';
import SignUp from '../components/SignUp/SignUp';

import { AppContainer, RotatingLinesContainer } from './App.styles';
import { Cart } from '../components/Cart/Cart';
import { UserProfile } from '../components/UserProfile/UserProfile';
import { Catalog } from '../components/Catalog/Catalog';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { findUser } from '../API/userRequests';
import { setUser } from '../store/reducers/user';
import { useAppDispatch } from '../store/hooks/hooks';

type DecodedTokenType = {
  id: number;
  iat: number;
  exp: number;
};

function App() {
  const [isInit, setIsInit] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setIsInit(true);
    } else {
      const decoded: DecodedTokenType = jwt_decode(token);
      (async () => {
        const res = await findUser(decoded.id).catch((error) => {
          (() => toast(error.response.data.message))();
        });
        dispatch(setUser(res?.data));
        setIsInit(true);
      })();
    }
  }, [dispatch]);

  if (!isInit) {
    return (
      <RotatingLinesContainer>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="100"
          visible
        />
      </RotatingLinesContainer>
    );
  }

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={
          // (
          //   <ProtectedRoute redirectPath="/user-profile">
          <Login />
          //   {/* </ProtectedRoute>
          // ) */}
        }
        />
        <Route path="/signup" element={
          // (
          // <ProtectedRoute redirectPath="/user-profile">
          <SignUp />
          //  </ProtectedRoute>
          // )
        }
        />
        <Route path="/cart" element={
          (
            <ProtectedRoute redirectPath="/">
              <Cart />
            </ProtectedRoute>
          )}
        />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/user-profile" element={
          (
            <ProtectedRoute redirectPath="/">
              <UserProfile />
            </ProtectedRoute>
          )}
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </AppContainer >
  );
}

export default App;
