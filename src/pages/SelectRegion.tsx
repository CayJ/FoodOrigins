import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import PageContainer from "../components/PageContainer";
import SearchBar from "../components/common/SearchBar";
import BackButton from "../components/common/BackButton";
import RegionGrid from "../components/common/RegionGrid";
import foodItems from "../data/foodItems";

const SelectRegion = () => {
	const { food_category } = useParams();
	const [filteredRegions, setFilteredRegions] = useState<string[]>([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const regions = foodItems
			.filter(item => item.category === food_category)
			.map(item => item.region);

		const uniqueRegions = Array.from(new Set(regions));

		const filtered = uniqueRegions.filter(region =>
			region.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setFilteredRegions(filtered);
	}, [food_category, searchTerm]);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<PageContainer>
			<Box sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
				<Typography variant="h5" gutterBottom style={{ color: "#4c9ab2", textAlign: 'center', marginBottom: '30px' }}>
					Food Origins
				</Typography>
				<Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
					{`Select a region for: ${food_category}`}
				</Typography>
				<SearchBar label={"Search regions"} onChange={handleSearchChange} />
				<RegionGrid regions={filteredRegions} />
				<BackButton label={"Back"} url={"/"} />
			</Box>
		</PageContainer>
	);
};

export default SelectRegion;
