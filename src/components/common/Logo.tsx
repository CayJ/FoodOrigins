import React from 'react';
import { Typography } from '@mui/material';

const Logo = () => {
	return (
		<Typography
			variant="h4"
			gutterBottom
			style={{
				color: "#a3beea",
				textAlign: 'center',
				marginBottom: '20px',
				fontWeight: 'bold',
				fontSize: '2.5rem',
				letterSpacing: '1px',
				fontFamily: "'Baloo Bhaijaan 2', cursive"
			}}
		>
			Food Origins
		</Typography>
	);
};

export default Logo;