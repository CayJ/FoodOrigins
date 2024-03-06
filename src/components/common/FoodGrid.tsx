import React from 'react';
import { Grid } from '@mui/material';
import FoodButton from "./FoodButton";
import {FoodItem} from "../../data/foodItems";

interface FoodGridProps {
	foodItems: FoodItem[]
}
const FoodGrid: React.FC<FoodGridProps> = ({ foodItems }) => {
	return (
		<Grid container spacing={3} justifyContent="center">
			{foodItems.map((foodItem, index) => (
				<Grid item key={index} xs={12} sm={6} md={4} lg={3}>
					<FoodButton foodItem={foodItem} />
				</Grid>
			))}
		</Grid>
	);
};

export default FoodGrid;
