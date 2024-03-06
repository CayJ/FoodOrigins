import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import PageContainer from "../components/PageContainer";
import SearchBar from "../components/common/SearchBar";
import BackButton from "../components/common/BackButton";
import FoodGrid from "../components/common/FoodGrid";
import foodItems, {FoodItem} from "../data/foodItems";
import Logo from "../components/common/Logo";

const SelectFood = () => {
	const { food_category, region } = useParams();
	const [items, setItems] = useState<FoodItem[]>([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const categoryData = foodItems.find(c => c.category === food_category && c.region === region);
		if (categoryData) {
			setItems(categoryData.items);
		}
	}, [food_category, region]);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value.toLowerCase());
	};

	useEffect(() => {
		const categoryData = foodItems.find(c => c.category === food_category && c.region === region);
		if (categoryData) {
			const filteredItems = categoryData.items.filter(item =>
				item.name.toLowerCase().includes(searchTerm)
			);
			setItems(filteredItems);
		}
	}, [searchTerm, food_category, region]);

	return (
		<PageContainer>
			<Box sx={{ width: '100%', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
				<Logo />
				<Typography variant="h6" gutterBottom style={{ textAlign: 'center', marginBottom: '20px' }}>
					{`${food_category} for ${region}:`}
				</Typography>
				<SearchBar label="Search food items" onChange={handleSearchChange} />
				<FoodGrid foodItems={items} />
				<BackButton label="Back" url={`/${food_category}`} />
			</Box>
		</PageContainer>
	);
};

export default SelectFood;