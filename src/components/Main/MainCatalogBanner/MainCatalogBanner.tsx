import { CommonButton } from '../../CommonButton/CommonButton';
import { MainCatalogBannerContainer } from './MainCatalogBanner.styles';
import books from '../../../assets/books.png';
import readingGirl from '../../../assets/reading-girl.png';

export const MainCatalogBanner = () => {
  return (
    <MainCatalogBannerContainer>
      <img
        className="main__banner__books-img"
        src={books}
        alt="books-img"
      />
      <div className="main__banner__info">
        <h1 className="main__banner__info_title">
          Build your library with us
        </h1>
        <p className="main__banner__info_text">
          Buy two books and get one for free
        </p>
        <CommonButton
          title="Choose a book"
          toggleBtn
        />
      </div>
      <img
        className="main__banner__reading-girl-img"
        src={readingGirl}
        alt="reding-girl-img"
      />
    </MainCatalogBannerContainer>
  );
};
