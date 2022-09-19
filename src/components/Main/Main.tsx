import { useAppSelector } from '../../store/hooks/hooks';
import { Catalog } from '../Catalog/Catalog';
import { LoginSignupBanner } from '../LoginSignupBanner/LoginSignupBanner';
import { MainContainer } from './Main.styles';

import { MainCatalogBanner } from './MainCatalogBanner/MainCatalogBanner';

export const Main = () => {
  const user = useAppSelector((state) => state.user.user?.email);

  return (
    <MainContainer>
      <div className="main__wrapper">
        <MainCatalogBanner />
        <Catalog />
        {!user ? <LoginSignupBanner /> : null}
      </div>
    </MainContainer>
  );
};

export default Main;
