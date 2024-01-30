import React from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
	label: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ label }) => {
	return (
		<TextField
			label={label}
			variant="outlined"
			fullWidth
			margin="normal"
			style={{ marginBottom: '35px' }}
		/>
	);
}

export default SearchBar;
