import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import ClassService from '../../services/ClassService';

import SearchIcon from '../../assets/images/icons/search.svg';
import './styles.css';
import SubjectSelect from '../../components/SubjectSelect';
import WeekDaySelect from '../../components/WeekDaySelect';

export default function TeacherList() {
	const [teachers, setTeachers] = useState([]);

	const [subject, setSubject] = useState('');
	const [week_day, setWeek_day] = useState('');
	const [time, setTime] = useState('');

	async function searchTeachers(e: FormEvent) {
		e.preventDefault();

		const teacherList = await ClassService.GetAll({
			params: {
				subject,
				week_day,
				time,
			},
		});

		setTeachers(teacherList);
	}

	return (
		<div id='page-teacher-list' className='container'>
			<PageHeader title='These are the available proffys.'>
				<form id='search-teachers' onSubmit={searchTeachers}>
					<SubjectSelect
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>

					<WeekDaySelect
						value={week_day}
						onChange={(e) => setWeek_day(e.target.value)}
					/>

					<Input
						type='time'
						name='time'
						label='Hour'
						value={time}
						onChange={(e) => {
							setTime(e.target.value);
						}}
					/>

					<button type='submit'>
						<img src={SearchIcon} alt='Busca' />
					</button>
				</form>
			</PageHeader>
			<main>
				{teachers.map((teacher: Teacher) => {
					return <TeacherItem key={teacher.id} teacher={teacher} />;
				})}
			</main>
		</div>
	);
}
