import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import Axios from 'axios'; 


export default function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    Axios.post('http://localhost:19007/create',
      {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage
      }).then(() => {
        console.log('succes');
      });
  };

  const displayInfo = () => {
    console.log(name + age + country + position + wage);
  };
  

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Name:</Text>
      <TextInput
        onChange={(event) => { setName(event.target.value) }}
        style={styles.textinput}
      >
      </TextInput>
      <Text></Text>


      <Text style={styles.text}>Age:</Text>
      <TextInput
        onChange={(event) => { setAge(event.target.value) }}
        style={styles.textinput}
        keyboardType='numeric'
      >
      </TextInput>
      <Text></Text>


      <Text style={styles.text}>Country:</Text>
      <TextInput
        onChange={(event) => { setCountry(event.target.value) }}
        style={styles.textinput}
      >
      </TextInput>
      <Text></Text>


      <Text style={styles.text}>Position:</Text>
      <TextInput
        onChange={(event) => { setPosition(event.target.value) }}
        style={styles.textinput}
      >
      </TextInput>
      <Text></Text>


      <Text style={styles.text}>Wage:</Text>
      <TextInput
        onChange={(event) => { setWage(event.target.value) }}
        style={styles.textinput}
        keyboardType='numeric'
      >
      </TextInput>
      <Text></Text>


      <Pressable
        onPress={addEmployee}
        title='submit'
        style={styles.button}>
        <Text style={styles.pressabletext}>SUBMIT ITEM</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    fontSize: 15,
    borderRadius: 6,
    marginVertical: 3,
    color: 'white',
    width: 150,
    textAlign: 'center',
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 2,
    fontSize: 15,
    borderRadius: 6,
    marginVertical: 3,
    color: 'white',
    width: 150,
    textAlign: 'center',
  },
  button: {
    marginTop: 15,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    fontSize: 15,
    borderRadius: 6,
    marginVertical: 10,
    width: 200,
  },
  pressabletext: {
    color: '#eee',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
