

// // HomeScreen.jsx
// import React, {useState, useEffect, useCallback} from 'react';
// import {
//   View,
//   FlatList,
//   Text,
//   TextInput,
//   Button,
//   ScrollView,
//   Switch,
//   StyleSheet,
// } from 'react-native';
// import Recipe from '../components/Recipe';
// import recipesData from '../data/recipeData'; // Import local recipe data

// import FilterRecipes from '../utils/FilterRecipes';

// const HomeScreen = ({navigation}) => {
//   const [searchText, setSearchText] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [filteredRecipes, setFilteredRecipes] = useState([]);
//   const [isVegetarian, setIsVegetarian] = useState(false);
//   const [isGlutenFree, setIsGlutenFree] = useState(false);

//   useEffect(() => {
//     // Mimicking a fetch call delay
//     setTimeout(() => {
//       setRecipes(recipesData);
//       setFilteredRecipes(recipesData);
//     }, 1000);
//   }, []);

//   // In your component:
//   const handleSearchChange = useCallback(
//     text => {
//       setSearchText(text);
//       const filtered = FilterRecipes(recipes, text, isVegetarian, isGlutenFree);
//       setFilteredRecipes(filtered);
//     },
//     [recipes, isVegetarian, isGlutenFree],
//   );

//   const toggleVegetarian = () => {
//     setIsVegetarian(!isVegetarian);
//     const filtered = FilterRecipes(
//       recipes,
//       searchText,
//       !isVegetarian,
//       isGlutenFree,
//     );
//     setFilteredRecipes(filtered);
//   };

//   const toggleGlutenFree = () => {
//     setIsGlutenFree(!isGlutenFree);
//     const filtered = FilterRecipes(
//       recipes,
//       searchText,
//       isVegetarian,
//       !isGlutenFree,
//     );
//     setFilteredRecipes(filtered);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search recipes..."
//         onChangeText={handleSearchChange}
//         value={searchText}
//       />
//       <Switch value={isVegetarian} onValueChange={toggleVegetarian} />
//       <Text>Vegetarian</Text>
//       <Switch value={isGlutenFree} onValueChange={toggleGlutenFree} />
//       <Text>Gluten-Free</Text>
//       <FlatList
//         data={filteredRecipes}
//         renderItem={({item}) => (
//           <Recipe
//             recipe={item}
//             onViewDetails={() =>
//               navigation.navigate('RecipeDetails', {recipe: item})
//             }
//           />
//         )}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   input: {
//     fontSize: 18,
//     margin: 10,
//     borderWidth: 1,
//     padding: 10,
//     borderColor: 'gray',
//   },
// });

// export default HomeScreen;



import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, Text, TextInput, Switch,StyleSheet} from 'react-native';
import Recipe from '../components/Recipe';
import recipesData from '../data/recipeData';
import {globalStyles, colors} from '../styles/globalStyles';
import FilterRecipes from '../utils/FilterRecipes';

// Additional local styles
const styles = StyleSheet.create({
  searchContainer: {
    padding: 1,
    backgroundColor: colors.background,
  },
  input: {
    ...globalStyles.input,
    marginVertical: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.background,
  },
  label: {
    ...globalStyles.paragraph,
  },
});

const HomeScreen = ({navigation}) => {
  // ... existing code ...
    const [searchText, setSearchText] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);

    useEffect(() => {
      // Mimicking a fetch call delay
      setTimeout(() => {
        setRecipes(recipesData);
        setFilteredRecipes(recipesData);
      }, 1000);
    }, []);

    // In your component:
    const handleSearchChange = useCallback(
      text => {
        setSearchText(text);
        const filtered = FilterRecipes(
          recipes,
          text,
          isVegetarian,
          isGlutenFree,
        );
        setFilteredRecipes(filtered);
      },
      [recipes, isVegetarian, isGlutenFree],
    );

    const toggleVegetarian = () => {
      setIsVegetarian(!isVegetarian);
      const filtered = FilterRecipes(
        recipes,
        searchText,
        !isVegetarian,
        isGlutenFree,
      );
      setFilteredRecipes(filtered);
    };

    const toggleGlutenFree = () => {
      setIsGlutenFree(!isGlutenFree);
      const filtered = FilterRecipes(
        recipes,
        searchText,
        isVegetarian,
        !isGlutenFree,
      );
      setFilteredRecipes(filtered);
    };
  return (
    <View style={globalStyles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search recipes..."
          onChangeText={handleSearchChange}
          value={searchText}
        />
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.label}>Vegetarian</Text>
        <Switch
          trackColor={{false: '#767577', true: colors.accent}}
          thumbColor={isVegetarian ? colors.primary : '#f4f3f4'}
          onValueChange={toggleVegetarian}
          value={isVegetarian}
        />
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.label}>Gluten-Free</Text>
        <Switch
          trackColor={{false: '#767577', true: colors.accent}}
          thumbColor={isGlutenFree ? colors.primary : '#f4f3f4'}
          onValueChange={toggleGlutenFree}
          value={isGlutenFree}
        />
      </View>
      <FlatList
        data={filteredRecipes}
        renderItem={({item}) => (
          <Recipe
            recipe={item}
            onViewDetails={() =>
              navigation.navigate('RecipeDetails', {recipe: item})
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
