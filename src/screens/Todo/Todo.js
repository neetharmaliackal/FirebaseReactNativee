// import React from 'react';
// import {Text,View} from 'react-native'

// export default function HomeScreen(props) {


//     return(
//         <View>
//             <Text>Home Screen</Text>
//         </View>
//     )
// }

// -----
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

const    Todo= ({navigation}) => {
  // const LoginScreen = ({navigation}) => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  const AboutFunction  = () => {
    navigation.navigate('AboutScreen');
}


  return (
    // <View style={styles.screen}> 
 
    
    
   
     
    <View style={styles.screen}>
        <Button onPress={ AboutFunction } title="ABOUT" color="#009688" />
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />

      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
export default Todo;