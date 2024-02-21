import React from 'react';
import { Grid } from '@mui/material';
import FoodButton from "./FoodButton";

interface FoodGridProps {
	regions: string[];
}
const FoodGrid: React.FC<FoodGridProps> = ({ regions }) => {
	return (
		<Grid container spacing={2.5} justifyContent="center">
			{regions.map((region, index) => (
				<Grid item key={index} xs={8} sm={5} md={3.25}>
					<FoodButton region={region} />
				</Grid>
			))}
		</Grid>
	);
}

export default FoodGrid;
