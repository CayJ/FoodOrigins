import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

interface FoodButtonProps {
	region: string;
}
const FoodButton: React.FC<FoodButtonProps> = ({ region }) => {
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
				backgroundColor: '#77a29b',
				'&:hover': {
					backgroundColor: '#8bb7ab',
				}
			}}
			onClick={() => navigate(`${region}/`)}
		>
			{region}
		</Button>
);
}

export default FoodButton;
