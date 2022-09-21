import ReactSlider from 'react-slider';
import { SortSliderContainer } from './SortSliderContainer.styles';

export const SortSlider = () => {
  return (
    <SortSliderContainer>
      <div className="sort__triangle" />
      <ReactSlider
        className="sort-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[0, 100]}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={1}
      />
    </SortSliderContainer>
  );
};
