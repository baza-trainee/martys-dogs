import styles from './LoaderAndError.module.scss';

interface ErrorAlertProps {
    errorMessage: string;
    backgroundColor?:string;
  }

  interface LoaderProps {
    backgroundColor?: string;
  }
  
  export const ErrorAlert: React.FC<ErrorAlertProps> = ({ errorMessage, backgroundColor }) => {
    const containerStyle: React.CSSProperties = {
      backgroundColor: backgroundColor || 'transparent', 
    };
  
    return (
      <div className={styles.statusContainer} style={containerStyle}>
        <span className={styles.alert}>{errorMessage}</span>
      </div>
    );
  };
  
  
  export const Loader: React.FC<LoaderProps> = ({ backgroundColor }) => {
    const containerStyle: React.CSSProperties = {
      backgroundColor: backgroundColor || 'transparent', 
    };
  
    return (
      <div className={styles.statusContainer} style={containerStyle}>
        <div className={styles.loader}></div>
      </div>
    );
  };
  
  export default Loader;
  