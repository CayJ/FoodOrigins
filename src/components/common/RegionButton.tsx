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
				height: '100px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: '18px',
				color: '#FFFFFF',
				backgroundColor: '#7e6b6b',
				'&:hover': {
					backgroundColor: '#8d7a7a',
				}
			}}
			onClick={() => navigate(`${region}/`)}
		>
			{region}
		</Button>
);
}

export default RegionButton;
