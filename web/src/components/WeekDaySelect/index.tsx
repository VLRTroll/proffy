import React, { ChangeEvent } from 'react';
import Select from '../Select';

interface WeekDaySelectProps {
	value: number | string;
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const WeekDaySelect: React.FC<WeekDaySelectProps> = (props) => {
	return (
		<Select
			name='weed_day'
			label='Dia da Semana'
			options={[
				{ value: '0', label: 'Domingo' },
				{ value: '1', label: 'Segunda-Feira' },
				{ value: '2', label: 'Terça-Feira' },
				{ value: '3', label: 'Quarta-Feira' },
				{ value: '4', label: 'Quinta-Feira' },
				{ value: '5', label: 'Sexta-Feira' },
				{ value: '6', label: 'Sábado' },
			]}
			{...props}
		/>
	);
};

export default WeekDaySelect;
