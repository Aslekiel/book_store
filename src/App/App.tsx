import { Routes, Route } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

import Login from '../components/LogIn/LogIn';
import SignUp from '../components/SignUp/SignUp';

import { AppContainer } from './App.styles';

function App() {
  return (

    <AppContainer>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </AppContainer>

  );
}

export default App;
