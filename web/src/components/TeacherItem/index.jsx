import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
	return (
		<article className='teacher-item'>
			<header>
				<img
					src='https://avatars3.githubusercontent.com/u/55628273?s=460&u=0da5402530b929964db41cf0ee170c127796fc8d&v=4'
					alt='VLRTroll'
				/>{' '}
				<div>
					<strong>VLRTroll</strong>
					<span>Latim</span>
				</div>
			</header>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis eos
				numquam quis asperiores quas at, fuga nisi dicta soluta, inventore
				doloribus, maxime voluptatibus quo cum odio! Nesciunt, repellendus
				ratione!
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 80,00</strong>
				</p>

				<button type='button'>
					<img src={whatsappIcon} alt='Whatsapp' />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;
