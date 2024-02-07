import React from 'react';
import {Box, Button} from '@mui/material';
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
	label: string;
	url: string;
}
const BackButton: React.FC<BackButtonProps> = ({ label, url }) => {
	const navigate = useNavigate();


	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
		<Button
			variant="contained"
			sx={{
				width: '25%',
					height: '50px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '18px',
					color: '#FFFFFF',
					backgroundColor: '#6c85a9',
					'&:hover': {
					backgroundColor: '#8197b9',
				}
			}}
	onClick={() => navigate(`${url}/`)}
>
	{label}
	</Button>
		</Box>
);
}

export default BackButton;
