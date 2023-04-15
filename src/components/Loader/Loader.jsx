import { ThreeCircles } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.box}>
      <ThreeCircles
        height="100"
        width="100"
        color="#3f51b5"
        wrapperStyle={{ margin: 'auto' }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};
