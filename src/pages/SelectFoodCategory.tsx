import React, { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import { Typography, Box } from '@mui/material';
import SearchBar from "../components/common/SearchBar";
import CategoryGrid from "../components/common/CategoryGrid";
import foodItems from "../data/foodItems";

export function SelectFoodCategory() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCategories, setFilteredCategories] = useState<string[]>([]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const categories = Array.from(new Set(foodItems.map(item => item.category)));

        const filtered = categories.filter(category =>
            category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredCategories(filtered);
    }, [searchTerm]);

    return (
        <PageContainer>
            <Box sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
                <Typography variant="h5" gutterBottom style={{ color:"#4c9ab2", textAlign: 'center', marginBottom: '30px' }}>
                    Food Origins
                </Typography>
                <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
                    Select a food category to discover
                </Typography>
                <SearchBar label={"Search food categories"} onChange={handleSearchChange} />
                <CategoryGrid categories={filteredCategories} />
            </Box>
        </PageContainer>
    );
}
