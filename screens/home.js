import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import Axios from 'axios';


export default function App() {

  const [employeeList, setEmployeeList] = useState([]);

  const [newAge, setNewAge] = useState(0);
  const [newName, setNewName] = useState(0);
  const [newCountry, setNewCountry] = useState(0);
  const [newPosition, setNewPosition] = useState(0);
  const [newWage, setNewWage] = useState(0);


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
        setEmployeeList([
          ...employeeList,
          {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
          },
        ]);
      });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:19007/customers").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:19007/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
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
        title='SUBMIT'
        style={styles.button}>
        <Text style={styles.pressabletext}>SUBMIT ITEM!</Text>
      </Pressable>

    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
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
  customer: {
    width: 700,
    border: 1,
    margin: 10,
    display: 'flex',
    padding: 10,
  },
});
