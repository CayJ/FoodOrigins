import React from 'react';
import { Button, Typography } from '@mui/material';
import { FoodItem } from "../../data/foodItems";

interface FoodButtonProps {
	foodItem: FoodItem;
}

const FoodButton: React.FC<FoodButtonProps> = ({ foodItem }) => {

	return (
		<Button
			variant="contained"
			sx={{
				width: '100%',
				minHeight: '120px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				alignItems: 'center',
				fontSize: '1rem',
				color: '#FFFFFF',
				backgroundColor: '#77a29b',
				textTransform: 'none',
				'&:hover': {
					backgroundColor: '#8bb7ab',
					transform: 'translateY(-3px)',
					boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
				},
				boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
				borderRadius: '8px',
				padding: '20px',
				transition: 'all 0.2s ease-in-out',
			}}
		>
			<Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
				{foodItem.name}
			</Typography>
			<Typography variant="body2" component="div" sx={{ textAlign: 'center' }}>
				{foodItem.description}
			</Typography>
		</Button>
	);
};

export default FoodButton;