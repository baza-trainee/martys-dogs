 import style from './ContainerSupport.module.scss'

interface ContainerSupportProps{
  title: string;
  description: string;
  containerSupportClasses?: string;
  children: React.ReactNode;
 }

const ContainerSupport:React.FC<ContainerSupportProps>= ({title, description, children,containerSupportClasses}) => {
  return (
    <div className={[style.container, containerSupportClasses&&style[containerSupportClasses]].join(' ')}>
      <div>
        <h2 className={style.title}>{title }</h2>
        <p className={style.description}>{description }</p>
      </div>
      {children}
    </div>
  )
 }

export default ContainerSupport;
