import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './.expo/components/Task';

export default function TaskPage() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

       <Image source={require('./assets/image 27.png')} style={styles.image} />
      
      <View style={styles.tasksWrapper}>
        <Text style={styles.Title}>Today's Tasks</Text>

        <View style={styles.items}>

          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }

          {/* <Task text={'Task 1'}/>
          <Task text={'Task 2'}/> */}

        </View>

        <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding" }
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Type your Task'} value={task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    
  },

  tasksWrapper:{
    flex: 1,
  },

  image:{
    position:'absolute',
    width: '100%',
    height: 400,
    top:130,
    opacity: 0.2,
    resizeMode: 'cover',
  },

  Title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',

    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    marginRight: 180,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    backgroundColor: '#FF8242',
  },

  items:{
    marginTop: 30,
    paddingHorizontal: 20,
  },

  writeTaskWrapper:{
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,

    backgroundColor: '#FFCFB8',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,

    fontWeight: 'bold',
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFCFB8',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText:{
       fontSize: 25,
       fontWeight: 'bold',
  },
});
