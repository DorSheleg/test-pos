import React, { useState } from "react";
import { Grid } from "@mui/material";
import TopBar from "./components/topBar";
import SearchBar from "./components/searchBar";
import CategoriesCarousel from "./components/categoriesCarousel";
import ShoppingCart from "./components/shoppingCart";
import ItemsGrid from "./components/itemsGrid";
import colors from "./constants/colors";
import categoriesData from "./mockData/categories.json";
import itemsData from "./mockData/products.json";
import { Product } from "./types/globalTypes";

const App: React.FC = () => {
  const updatedItemsData = itemsData.map((item) => ({
    ...item,
    quantity: 0,
  }));
  const [selectedCategory, setSelectedCategory] = useState<number>(
    categoriesData[0].id
  );
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const handleAddToCart = (item: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (itemId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  return (
    <>
      <TopBar />
      <Grid
        container
        sx={{
          backgroundColor: "white",
        }}
      >
        <Grid item xs={8}>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CategoriesCarousel
            categories={categoriesData}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <ItemsGrid
            items={updatedItemsData as Product[]}
            selectedCategory={selectedCategory}
            onItemClick={handleAddToCart}
          />
        </Grid>
        <Grid item xs={4} p={2}>
          <ShoppingCart
            items={cartItems}
            onRemove={handleRemoveFromCart}
            onCheckout={handleCheckout}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
