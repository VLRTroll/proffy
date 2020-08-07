import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import ConnectionService from '../../services/ConnectionService';
import WeekDaySelect from '../../components/WeekDaySelect';
import SubjectSelect from '../../components/SubjectSelect';

export default function TeacherForm() {
	const history = useHistory();

	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [bio, setBio] = useState('');

	const [subject, setSubject] = useState('');
	const [cost, setCost] = useState('');

	const [scheduleItems, setScheduleItems] = useState([
		{ week_day: 0, from: '', to: '' },
	]);

	const addNewScheduleItem = () => {
		setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
	};

	const setScheduleItemValue = (
		position: number,
		field: string,
		value: string
	) => {
		const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
			if (index === position) {
				return { ...scheduleItem, [field]: value };
			}

			return scheduleItem;
		});

		setScheduleItems(updatedScheduleItems);
	};

	const handleCreateClass = async (e: FormEvent) => {
		e.preventDefault();

		await ConnectionService.Create({
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost: Number(cost),
			schedule: scheduleItems,
		}).catch(() => alert('Erro ao criar a conexão'));

		history.push('/');
	};

	return (
		<div id='page-teacher-form' className='container'>
			<PageHeader
				title='Awesome! You want to give lessons'
				description='The first step is fill this inscription form'
			/>

			<main>
				<form onSubmit={handleCreateClass}>
					<fieldset>
						<legend>Your info</legend>

						<Input
							name='name'
							label='Complete Name'
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<Input
							name='avatar'
							label='Avatar'
							value={avatar}
							onChange={(e) => {
								setAvatar(e.target.value);
							}}
						/>
						<Input
							name='whatsapp'
							label='Whatsapp'
							value={whatsapp}
							onChange={(e) => {
								setWhatsapp(e.target.value);
							}}
						/>
						<Textarea
							name='bio'
							label='Biography'
							value={bio}
							onChange={(e) => {
								setBio(e.target.value);
							}}
						/>
					</fieldset>

					<fieldset>
						<legend>About your lesson</legend>

						<SubjectSelect
							value={subject}
							onChange={(e) => {
								setSubject(e.target.value);
							}}
						/>
						<Input
							name='cost'
							label='Hour cost for your class'
							value={cost}
							onChange={(e) => {
								setCost(e.target.value);
							}}
						/>
					</fieldset>

					<fieldset>
						<legend>
							Available Times
							<button type='button' onClick={addNewScheduleItem}>
								+ New time
							</button>
						</legend>

						{scheduleItems.map((scheduleItem, index) => {
							return (
								<div key={scheduleItem.week_day} className='schedule-item'>
									<WeekDaySelect
										value={scheduleItem.week_day}
										onChange={(e) =>
											setScheduleItemValue(index, 'week_day', e.target.value)
										}
									/>

									<Input
										name='from'
										label='From'
										type='time'
										value={scheduleItem.from}
										onChange={(e) =>
											setScheduleItemValue(index, 'from', e.target.value)
										}
									/>
									<Input
										name='to'
										label='to'
										type='time'
										value={scheduleItem.to}
										onChange={(e) =>
											setScheduleItemValue(index, 'to', e.target.value)
										}
									/>
								</div>
							);
						})}
					</fieldset>

					<footer>
						<p>
							<img src={warningIcon} alt='Warning' />
							Cuidado! <br />
							Preencha todos os campos
						</p>
						<button type='submit'>Salvar</button>
					</footer>
				</form>
			</main>
		</div>
	);
}
