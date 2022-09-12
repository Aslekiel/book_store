import { Catalog } from '../Catalog/Catalog';
import { LoginSignupBanner } from '../LoginSignupBanner/LoginSignupBanner';
import { MainContainer } from './Main.styles';

import { MainCatalogBanner } from './MainCatalogBanner/MainCatalogBanner';

export const Main = () => {
  return (
    <MainContainer>
      <div className="main__wrapper">
        <MainCatalogBanner />
        <Catalog />
        <LoginSignupBanner />
      </div>
    </MainContainer>
  );
};

export default Main;
