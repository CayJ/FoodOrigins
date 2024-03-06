import React from 'react';
import { Grid } from '@mui/material';
import CategoryButton from './CategoryButton';

interface CategoryGridProps {
	categories: string[];
}
const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
	return (
		<Grid container spacing={3} justifyContent="center">
			{categories.map((category, index) => (
				<Grid item key={index} xs={12} sm={6} md={4} lg={3}>
					<CategoryButton category={category} />
				</Grid>
			))}
		</Grid>
	);
}

export default CategoryGrid;
