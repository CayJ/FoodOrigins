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
				height: '120px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: '1rem',
				color: '#FFFFFF',
				backgroundColor: '#75a1b0',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				'&:hover': {
					backgroundColor: '#82b1c0',
					boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
				},
				transition: 'all 0.3s ease-in-out',
				borderRadius: '8px',
			}}
			onClick={() => navigate(`/${category}/`)}
		>
			{category}
		</Button>
);
}

export default CategoryButton;
