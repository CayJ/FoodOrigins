import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import PageContainer from "../components/PageContainer";
import SearchBar from "../components/common/SearchBar";
import BackButton from "../components/common/BackButton";
import FoodGrid from "../components/common/FoodGrid";

const SelectFood = () => {
	const { food_category, region } = useParams();

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {

	};

	let filteredRegions = ["Food 1", "Food 2", "Food 3"];

	return (
		<PageContainer>
			<Box sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
				<Typography variant="h4" gutterBottom style={{ color:"#4c9ab2", textAlign: 'center', marginBottom: '30px' }}>
					Food Origins
				</Typography>
				<Typography variant="h6" gutterBottom style={{ textAlign: 'center', marginBottom: '20px' }}>
					{`${food_category} for ${region}:`}
				</Typography>
				<SearchBar label="Search food items" onChange={handleSearchChange} />
				<FoodGrid regions={filteredRegions} />
				<BackButton label="Back" url={`/${food_category}`} />
			</Box>
		</PageContainer>
	);
};

export default SelectFood;