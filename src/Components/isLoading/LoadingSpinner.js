import classes from './isloading.module.css';

const LoadingSpinner = () => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;