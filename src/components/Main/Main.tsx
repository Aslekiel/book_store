import { Catalog } from '../Catalog/Catalog';
import { LoginSignupBanner } from '../LoginSignupBanner/LoginSignupBanner';
import { MainContainer } from './Main.styles';

import { MainCatalogBanner } from './MainCatalogBanner/MainCatalogBanner';

type IsTokenType = {
  isToken: string | null;
};

export const Main: React.FC<IsTokenType> = ({ isToken }) => {
  return (
    <MainContainer>
      <div className="main__wrapper">
        <MainCatalogBanner />
        <Catalog />
        {!isToken ? <LoginSignupBanner /> : ''}
      </div>
    </MainContainer>
  );
};

export default Main;
