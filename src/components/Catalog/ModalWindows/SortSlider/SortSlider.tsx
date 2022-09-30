import { useState } from 'react';
import ReactSlider from 'react-slider';
import { booksApi } from '../../../../api/booksApi';
import { setBooks } from '../../../../store/books/books';
import { useAppDispatch } from '../../../../store/hooks/hooks';
import { SortSliderContainer } from './SortSliderContainer.styles';

export const SortSlider = () => {
  const dispatch = useAppDispatch();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const onChangeHandler = (value: number[]) => {
    const changedMinPrice = +(value[0] + value[0] / 10).toFixed(2);
    const changedMaxPrice = +(value[1] - (10 - value[1] / 10)).toFixed(2);
    setMinPrice(changedMinPrice);
    setMaxPrice(changedMaxPrice);
  };

  const onMouseUpHandler = async () => {
    try {
      const res = await booksApi.getAllBooks();
      const sortedByMinMaxPrice = [...res.data.books].filter(
        (book) => book.price >= minPrice && book.price <= maxPrice,
      );
      dispatch(setBooks({ books: sortedByMinMaxPrice }));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <SortSliderContainer
      onMouseUp={onMouseUpHandler}
    >
      <div className="sort__triangle" />
      <ReactSlider
        className="sort__slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[0, 100]}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
        onChange={(value) => onChangeHandler(value)}
      />
      <div
        className="sort__min-Price"
      >
        $ {minPrice}
      </div>
      <div
        className="sort__max-Price"
      >
        $ {maxPrice}
      </div>
    </SortSliderContainer>
  );
};
