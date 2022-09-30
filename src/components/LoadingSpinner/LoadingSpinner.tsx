import { RotatingLines } from 'react-loader-spinner';
import { LoadingSpinnerContainer } from './LoadingSpinnerContainer.styles';

export const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible
      />
    </LoadingSpinnerContainer>
  );
};
