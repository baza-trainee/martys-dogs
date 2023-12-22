interface TailProps {
	img: string;
	ready: boolean;
	name: string;
	age: string;
	gender: string;
	description: string;
	size: string;
}

const Tail: React.FC<TailProps> = ({ img, ready, name, age, gender, description, size }) => {
	return (
		<div className='card'>
			<img src={img} alt='dog' />
			<div className='overlay'>
				{ready && (
					<span className='friend'>Готовий стати твоїм другом</span>
				)}
				<div className='description'>
					<div className='title'>
						<h3 className='name'>{name}</h3>
						<p>
							{gender}, {age}
						</p>
					</div>
					<div>
						<div>
							<span className='vaccine'>
								Вакцинація/обробка від паразитів
							</span>
							<span className='vaccine'>Стерилізація</span>
							<span className='size'>{size}</span>
						</div>
						<p>{description}</p>
					</div>
					<a
						href='https://www.monobank.com.ua/'
						target='_blank'
						rel='noopener noreferrer'
						className='donate'
					></a>
				</div>
			</div>
		</div>
	);
};

export default Tail;
