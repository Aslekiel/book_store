import { useAppSelector } from '../../store/hooks/hooks';
import { Catalog } from '../Catalog/Catalog';
import { LoginSignupBanner } from '../LoginSignupBanner/LoginSignupBanner';
import { MainContainer } from './Main.styles';

import { MainCatalogBanner } from './MainCatalogBanner/MainCatalogBanner';

// eslint-disable-next-line @typescript-eslint/naming-convention
type Props = {
  auth: boolean;
};

export const Main: React.FC<Props> = ({ auth }) => {
  const user = useAppSelector((state) => state.user.email);

  return (
    <MainContainer>
      <div className="main__wrapper">
        <MainCatalogBanner />
        <Catalog />
        {!user && auth && <LoginSignupBanner />}
      </div>
    </MainContainer>
  );
};

export default Main;
