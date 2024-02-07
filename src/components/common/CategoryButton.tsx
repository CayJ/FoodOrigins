import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

interface CategoryButtonProps {
	category: string;
}
const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
	const navigate = useNavigate();


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
				color: '#FFFFFF',
				backgroundColor: '#75a1b0',
				'&:hover': {
					backgroundColor: '#82b1c0',
				}
			}}
			onClick={() => navigate(`${category}/`)}
		>
			{category}
		</Button>
);
}

export default CategoryButton;
