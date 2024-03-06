import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

interface RegionButtonProps {
	region: string;
}
const RegionButton: React.FC<RegionButtonProps> = ({ region }) => {
	const navigate = useNavigate();


	return (
		<Button
			variant="contained"
			sx={{
				width: '100%',
				minHeight: '120px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: '1rem',
				color: '#FFFFFF',
				backgroundColor: '#7e6b6b',
				'&:hover': {
					backgroundColor: '#8d7a7a',
					transform: 'translateY(-3px)',
					boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
				},
				boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
				borderRadius: '8px',
				padding: '20px',
				transition: 'all 0.2s ease-in-out',
			}}
			onClick={() => navigate(`${region}/`)}
		>
			{region}
		</Button>
);
}

export default RegionButton;
