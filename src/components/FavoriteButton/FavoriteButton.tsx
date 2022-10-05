import { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { addFavoriteBookThunk, deleteFavoriteBookThunk } from '../../store/user/thunk/userThunks';

import heartFull from '../../assets/heart-full.png';
import heartEmpty from '../../assets/heart-empty.png';
import { FavoriteButtonContainer } from './FavoriteButton.styles';

type PropsType = {
    id: number;
    mirrorState?: boolean;
};

export const FavoriteButton: React.FC<PropsType> = ({ id, mirrorState }) => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const favoriteBooksIds = useMemo(() => {
    return !user ? [] : user?.favorites?.map((favorite) => favorite.bookId);
  }, [user]);

  const isFavorite = !!favoriteBooksIds?.includes(+id);

  const onClickFavorite = async () => {
    try {
      if (!isFavorite) {
        await dispatch(addFavoriteBookThunk(Number(id))).unwrap();
        return;
      }
      await dispatch(deleteFavoriteBookThunk(Number(id))).unwrap();
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast(error.response?.data.message);
      }
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
      <FavoriteButtonContainer
        onClick={onClickFavorite}
        favorite={isFavorite}
        mirrorState={mirrorState}
        >
        <img
          className="favorite__logo"
          src={isFavorite ? heartFull : heartEmpty}
          alt="heart-favorite"
        />
        <ToastContainer />
      </FavoriteButtonContainer>
  );
};
