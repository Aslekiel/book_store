import { RotatingLines } from 'react-loader-spinner';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../store/hooks/hooks';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Login from '../components/LogIn/LogIn';
import SignUp from '../components/SignUp/SignUp';
import { UserProfile } from '../components/UserProfile/UserProfile';
import { Catalog } from '../components/Catalog/Catalog';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { BookInfo } from '../components/BookInfo/BookInfo';
import { Cart } from '../components/Cart/Cart';
import { FavoritePage } from '../components/FavoritePage/FavoritePage';
import { SeacrchBooks } from '../components/SearchBooks/SeacrchBooks';

import { userApi } from '../api/userApi';
import { setUser } from '../store/user/user';

import { AppContainer, RotatingLinesContainer } from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isInit, setIsInit] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setIsInit(true);
      return;
    }
    (async () => {
      try {
        const res = await userApi.checkUser();
        dispatch(setUser(res.data));
      } catch (error) {
        throw new Error();
      } finally {
        setIsInit(true);
      }
    })();
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
          (
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          )
        }
        />
        <Route path="/signup" element={
          (
            <ProtectedRoute>
              <SignUp />
            </ProtectedRoute>
          )
        }
        />
        <Route path="/cart" element={
          (
            <ProtectedRoute isLogIn>
              <Cart />
            </ProtectedRoute>
          )
        }
        />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/user-profile" element={
          (
            <ProtectedRoute isLogIn>
              <UserProfile />
            </ProtectedRoute>
          )}
        />
        <Route path="/book/:id" element={<BookInfo />} />
        <Route path="/favorite" element={
          (
            <ProtectedRoute isLogIn>
              <FavoritePage />
            </ProtectedRoute>
          )
        }
        />
        <Route path="/search" element={<SeacrchBooks />} />
      </Routes>
      <Footer />
    </AppContainer >
  );
}

export default App;
