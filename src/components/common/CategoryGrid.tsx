import React from 'react';
import { Grid } from '@mui/material';
import CategoryButton from './CategoryButton';

interface CategoryGridProps {
	categories: string[];
}
const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
	return (
		<Grid container spacing={2.5} justifyContent="center">
			{categories.map((category, index) => (
				<Grid item key={index} xs={8} sm={5} md={3.25}>
					<CategoryButton category={category} />
				</Grid>
			))}
		</Grid>
	);
}

export default CategoryGrid;
