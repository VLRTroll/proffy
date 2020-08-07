import React, { ChangeEvent } from 'react';
import Select from '../Select';

interface SubjectSelectProps {
	value: number | string;
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SubjectSelect: React.FC<SubjectSelectProps> = (props) => {
	return (
		<Select
			name='weed_day'
			label='Matéria'
			options={[
				{ value: 'Matemática', label: 'Matemática' },
				{ value: 'Física', label: 'Física' },
				{ value: 'Química', label: 'Química' },
				{ value: 'Biologia', label: 'Biologia' },
				{ value: 'História', label: 'História' },
				{ value: 'Geografia', label: 'Geografia' },
				{ value: 'Sociologia', label: 'Sociologia' },
				{ value: 'Filosofia', label: 'Filosofia' },
				{ value: 'Artes', label: 'Artes' },
				{ value: 'Português', label: 'Português' },
				{ value: 'Inglês', label: 'Inglês' },
				{ value: 'Espanhol', label: 'Artes' },
				{ value: 'Latim', label: 'Latim' },
				{ value: 'Redação', label: 'Redação' },
				{ value: 'Educação Física', label: 'Educação Física' },
			]}
			{...props}
		/>
	);
};

export default SubjectSelect;
