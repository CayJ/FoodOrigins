import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = () => {
	return (
		<TextField
			label="Search Food Categories"
			variant="outlined"
			fullWidth
			margin="normal"
			style={{ marginBottom: '40px' }}
		/>
	);
}

export default SearchBar;
