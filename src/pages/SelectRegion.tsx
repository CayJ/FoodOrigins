import React, {useState} from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import PageContainer from "../components/PageContainer";
import SearchBar from "../components/common/SearchBar";
import { regions } from '../data/regions';
import BackButton from "../components/common/BackButton";

const SelectRegion = () => {
	const { food_category, region } = useParams();


	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const isValidRegion = region && regions.includes(region);

	if (isValidRegion) {
		return <Navigate to={`/${food_category}/${region}`} replace />;
	}

	return (
		<PageContainer>
			<Box sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
				<Typography variant="h5" gutterBottom style={{ color:"#4c9ab2", textAlign: 'center', marginBottom: '30px' }}>
					Food Origins
				</Typography>
				<Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
					{`Select a region for: ` }
				</Typography>
				<SearchBar label={"Search regions"} onChange={handleSearchChange} />
				<BackButton label={"Back"} url={""} />
			</Box>
		</PageContainer>
	);
};

export default SelectRegion;
