import React from 'react';
import { Button } from '@mui/material';

interface CategoryButtonProps {
	category: string;
}
const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
	const colors = ['#b093e3', '#93d0e3', '#a5e393'];
	const bgColor = colors[Math.floor(Math.random() * colors.length)];


	return (
		<Button
			variant="contained"
			sx={{
				width: '100%',
				height: '100px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: '18px',
				marginBottom: '15px',
				backgroundColor: bgColor,
				'&:hover': {
					backgroundColor: bgColor,
				}
			}}
		>
			{category}
		</Button>
);
}

export default CategoryButton;
