

// Dashboard.js
import React, { useState, useEffect } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import recipeData from '../data/recipeData'; // Ensure this is the correct path
import RecipeCarousel from './RecipeCarousel';
import RecipeLineChart from './RecipeLineChart';
import MostPopularRecipe from './MostPopularRecipe';

const Dashboard = () => {
    const [refreshing, setRefreshing] = useState(false);
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{ data: [0, 20, 45, 28, 80, 99, 43], strokeWidth: 2 }]
    };

    const onRefresh = () => {
        setRefreshing(true);
        // Simulate a refresh of data
        setTimeout(() => {
            // Here you might fetch new data and set it
            setRefreshing(false);
        }, 1000);
    };

    return (
        <ScrollView
            style={globalStyles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <View style={globalStyles.modalContent}>
               <RecipeCarousel data={recipeData} />
                <MostPopularRecipe data={recipeData} />
                <RecipeLineChart data={data} />
            </View>
        </ScrollView>
    );
};

export default Dashboard;
