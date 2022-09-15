import { CommonButton } from '../../CommonButton/CommonButton';
import { MainCatalogBannerContainer } from './MainCatalogBanner.styles';

export const MainCatalogBanner = () => {
  return (
    <MainCatalogBannerContainer>
      <img
        className="main__banner__books-img"
        src="./img/books.svg"
        alt="books-img"
      />
      <div className="main__banner__info">
        <h1 className="main__banner__info__title">
          Build your library with us
        </h1>
        <p className="main__banner__info__text">
          Buy two books and <br /> get one for free
        </p>
        <CommonButton title="Choose a book" />
      </div>
      <img
        className="main__banner__reading-girl-img"
        src="./img/reading-girl.svg"
        alt="reding-girl-img"
      />
    </MainCatalogBannerContainer>
  );
};
