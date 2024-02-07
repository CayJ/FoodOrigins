import React from 'react';
import { Grid } from '@mui/material';
import RegionButton from "./RegionButton";

interface RegionGridProps {
	regions: string[];
}
const CategoryGrid: React.FC<RegionGridProps> = ({ regions }) => {
	return (
		<Grid container spacing={2.5} justifyContent="center">
			{regions.map((region, index) => (
				<Grid item key={index} xs={8} sm={5} md={3.25}>
					<RegionButton region={region} />
				</Grid>
			))}
		</Grid>
	);
}

export default CategoryGrid;
