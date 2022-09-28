import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Login from '../components/LogIn/LogIn';
import SignUp from '../components/SignUp/SignUp';

import { AppContainer, RotatingLinesContainer } from './App.styles';
import { UserProfile } from '../components/UserProfile/UserProfile';
import { Catalog } from '../components/Catalog/Catalog';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { useAppDispatch } from '../store/hooks/hooks';
import 'react-toastify/dist/ReactToastify.css';
import { userApi } from '../api/userApi';
import { setUser } from '../store/user/user';
import { BookInfo } from '../components/BookInfo/BookInfo';
import { Cart } from '../components/Cart/Cart';
import { FavoritePage } from '../components/FavoritePage/FavoritePage';

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
        if (error instanceof AxiosError) {
          return toast(error.response?.data.message);
        }
        // eslint-disable-next-line no-console
        console.log(error);
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
        <Route path="/book/:id" element={
          (
            <ProtectedRoute isLogIn>
              <BookInfo />
            </ProtectedRoute>
          )
        }
        />
        <Route path="/favorite" element={
          (
            <ProtectedRoute isLogIn>
              <FavoritePage />
            </ProtectedRoute>
          )
        }
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </AppContainer >
  );
}

export default App;
