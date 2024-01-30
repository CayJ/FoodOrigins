import React from "react";
import PageContainer from "../components/PageContainer";
import { Typography, Box } from '@mui/material';
import SearchBar from "../components/common/SearchBar";
import CategoryGrid from "../components/common/CateogryGrid";

export function SelectFoodCategory() {
    const categories = ['Coffee', 'Food', 'Food', 'Food', 'Food', 'Food'];

    return (
        <PageContainer>
            <Box sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
                <Typography variant="h5" gutterBottom style={{ color:"#4c9ab2", textAlign: 'center', marginBottom: '30px' }}>
                    Food Origins
                </Typography>
                <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
                    Select a food category to discover
                </Typography>
                <SearchBar label={"Search food categories"} />
                <CategoryGrid categories={categories} />
            </Box>
        </PageContainer>
    );
}
