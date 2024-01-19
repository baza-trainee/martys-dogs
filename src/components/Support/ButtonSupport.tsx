import style from './ButtonSupport.module.scss'


interface ButtonSupportProps {
	src: string;
	link: string;
	onClick: (e: React.SyntheticEvent<EventTarget>) => void;
	
}

 const ButtonSupport:React.FC<ButtonSupportProps> = ({src,onClick,link}) => {
  return (
    <button onClick={onClick} data-link={link} className={style.button}><img src={src } /></button>
  )
}

export default ButtonSupport;

