import React from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ label, onChange }) => {
	return (
		<TextField
			label={label}
			onChange={onChange}
			variant="outlined"
			fullWidth
			margin="normal"
			style={{ marginBottom: '35px' }}
		/>
	);
}

export default SearchBar;
