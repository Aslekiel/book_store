import ReactSlider from 'react-slider';
import { useAppSelector } from '../../../../store/hooks/hooks';
import { SortSliderContainer } from './SortSliderContainer.styles';

export const SortSlider = () => {
  const books = useAppSelector((state) => state.books.books);

  const sortedByPrice = [...books].sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1));

  return (
    <SortSliderContainer>
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
      />
      <div
        className="sort__min-Price"
      >
        $ {sortedByPrice[0].price}
      </div>
      <div
        className="sort__max-Price"
      >
        $ {sortedByPrice[sortedByPrice.length - 1].price}
      </div>
    </SortSliderContainer>
  );
};
