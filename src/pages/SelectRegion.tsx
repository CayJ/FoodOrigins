import React, {useEffect, useState} from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import PageContainer from "../components/PageContainer";
import SearchBar from "../components/common/SearchBar";
import BackButton from "../components/common/BackButton";
import RegionGrid from "../components/common/RegionGrid";
import foodCategories from "../data/foodCategories";

const SelectRegion = () => {
	const { food_category, region } = useParams();
	const [filteredRegions, setFilteredRegions] = useState<string[]>([]);
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	useEffect(() => {
		const category = foodCategories.find(c => c.category === food_category);
		const filtered = category?.regions.filter(r =>
			r.toLowerCase().includes(searchTerm.toLowerCase())
		) || [];

		setFilteredRegions(filtered);
	}, [food_category, searchTerm]);

	if (region) {
		return <Navigate to={`/${food_category}/${region}`} replace />;
	}

	return (
		<PageContainer>
			<Box sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
				<Typography variant="h5" gutterBottom style={{ color:"#4c9ab2", textAlign: 'center', marginBottom: '30px' }}>
					Food Origins
				</Typography>
				<Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
					{`Select a region for: ${food_category}` }
				</Typography>
				<SearchBar label={"Search regions"} onChange={handleSearchChange} />
				<RegionGrid regions={filteredRegions} />
				<BackButton label={"Back"} url={"/"} />
			</Box>
		</PageContainer>
	);
};

export default SelectRegion;
