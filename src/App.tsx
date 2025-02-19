import React, { useState } from "react";
import { Grid } from "@mui/material";
import TopBar from "./components/topBar";
import SearchBar from "./components/searchBar";
import CategoriesCarousel from "./components/categoriesCarousel";
import ShoppingCart from "./components/shoppingCart";
import ItemsGrid from "./components/itemsGrid";
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Check if query matches a category name
    const matchedCategory = categoriesData.find((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    );

    if (matchedCategory) {
      setSelectedCategory(matchedCategory.id);
    } else {
      // Reset category selection when searching for a product
      setSelectedCategory(0); // Assuming 0 means "all categories"
    }
  };

  const handleRemoveFromCart = (itemId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    alert("לא הספקתי :)");
  };

  // ** New function to clear the cart **
  const clearCart = () => {
    setCartItems([]);
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
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
          <CategoriesCarousel
            categories={categoriesData}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <ItemsGrid
            items={updatedItemsData as Product[]}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onItemClick={handleAddToCart}
          />
        </Grid>
        <Grid item xs={4} p={2}>
          <ShoppingCart
            items={cartItems}
            onRemove={handleRemoveFromCart}
            onCheckout={handleCheckout}
            clearCart={clearCart} // ** Pass clearCart to ShoppingCart **
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
