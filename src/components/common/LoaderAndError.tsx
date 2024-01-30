import styles from './LoaderAndError.module.scss';

interface ErrorAlertProps {
    errorMessage: string;
  }
  
  export const ErrorAlert: React.FC<ErrorAlertProps> = ({ errorMessage }) => {
    return (
      <div className={styles.statusContainer}>
        <div className={styles.alert}>{errorMessage}</div>
      </div>
    );
  };
  
  export const Loader: React.FC = () => {
    return (
      <div className={styles.statusContainer}>
        <div className={styles.loading}></div>
      </div>
    );
  };
  