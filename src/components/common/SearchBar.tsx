import React from 'react';
import { TextField, styled } from '@mui/material';

interface SearchBarProps {
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FoodTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: '#3daede',
	},
	'& .MuiOutlinedInput-root': {
		'&.Mui-focused fieldset': {
			borderColor: '#3daede',
		},
		'& fieldset': {
			borderRadius: '8px',
			boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
		},
		'&:hover fieldset': {
			borderColor: '#67c5ee',
		},
	},
});

const SearchBar: React.FC<SearchBarProps> = ({ label, onChange }) => {
	return (
		<FoodTextField
			label={label}
			onChange={onChange}
			variant="outlined"
			fullWidth
			margin="normal"
			sx={{
				marginBottom: '35px',
			}}
		/>
	);
}

export default SearchBar;