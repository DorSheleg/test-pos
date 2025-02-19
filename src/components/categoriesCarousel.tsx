import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import colors from "../constants/colors";

interface Category {
  id: number;
  name: string;
}

interface CategoriesCarouselProps {
  categories: Category[];
  selectedCategory: number;
  onCategoryChange: (categoryId: number) => void;
}

const CategoriesCarousel: React.FC<CategoriesCarouselProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        backgroundColor: colors.background,
      }}
    >
      <Tabs
        value={selectedCategory}
        onChange={(_event, newValue) => onCategoryChange(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: colors.dark,
            direction: "rtl",
          },
        }}
      >
        {categories.map((category) => (
          <Tab
            key={category.id}
            label={category.name}
            value={category.id}
            sx={{
              fontWeight: 600,
              color:
                selectedCategory === category.id
                  ? colors.dark
                  : colors.secondary,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoriesCarousel;
