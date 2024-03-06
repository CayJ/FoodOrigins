import React from 'react';
import { Grid } from '@mui/material';
import RegionButton from "./RegionButton";

interface RegionGridProps {
	regions: string[];
}
const RegionGrid: React.FC<RegionGridProps> = ({ regions }) => {
	return (
		<Grid container spacing={3} justifyContent="center">
			{regions.map((region, index) => (
				<Grid item key={index} xs={12} sm={6} md={4} lg={3}>
					<RegionButton region={region} />
				</Grid>
			))}
		</Grid>
	);
}

export default RegionGrid;
