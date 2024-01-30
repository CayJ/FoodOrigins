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
                <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginBottom: '20px' }}>
                    Select a Food Category
                </Typography>
                <SearchBar />
                <CategoryGrid categories={categories} />
            </Box>
        </PageContainer>
    );
}
