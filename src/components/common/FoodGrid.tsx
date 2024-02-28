import React from 'react';
import { Grid } from '@mui/material';
import FoodButton from "./FoodButton";
import {FoodItem} from "../../data/foodItems";

interface FoodGridProps {
	foodItems: FoodItem[]
}
const FoodGrid: React.FC<FoodGridProps> = ({ foodItems }) => {
	return (
		<Grid container spacing={2.5} justifyContent="center">
			{foodItems.map((foodItem, index) => (
				<Grid item key={index} xs={8} sm={5} md={3.25}>
					<FoodButton foodItem={foodItem} />
				</Grid>
			))}
		</Grid>
	);
};

export default FoodGrid;
