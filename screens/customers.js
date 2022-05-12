import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import Axios from 'axios';

export default function Customers() {

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

    const updateCustomer = (id) => {
        Axios.put("http://localhost:19007/update", { name: newName, age: newAge, country: newCountry, position: newPosition, wage: newWage, id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id == id
                            ? {
                                id: val.id,
                                name: newName,
                                country: newCountry,
                                position: newPosition,
                                age: newAge,
                                wage: newWage,
                            }
                            : val;
                    })
                );
            }
        );
    };
    const updateCustomerName = (id) => {
        Axios.put("http://localhost:19007/updatename", { name: newName, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id == id
                            ? {
                                id: val.id,
                                name: newName,
                                country: val.country,
                                age: val.age,
                                position: val.position,
                                wage: val.wage,
                            }
                            : val;
                    })
                );
            }
        );
    };
    const updateCustomerAge = (id) => {
        Axios.put("http://localhost:19007/updateage", { age: newAge, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id == id
                            ? {
                                id: val.id,
                                name: val.name,
                                country: val.country,
                                age: newAge,
                                position: val.position,
                                wage: val.wage,
                            }
                            : val;
                    })
                );
            }
        );
    };
    const updateCustomerCountry = (id) => {
        Axios.put("http://localhost:19007/updatecountry", { country: newCountry, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id == id
                            ? {
                                id: val.id,
                                name: val.name,
                                country: newCountry,
                                age: val.age,
                                position: val.position,
                                wage: val.wage,
                            }
                            : val;
                    })
                );
            }
        );
    };
    const updateCustomerPosition = (id) => {
        Axios.put("http://localhost:19007/updateposition", { position: newPosition, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id == id
                            ? {
                                id: val.id,
                                name: val.name,
                                country: val.country,
                                age: val.age,
                                position: newPosition,
                                wage: val.wage,
                            }
                            : val;
                    })
                );
            }
        );
    };

    const updateCustomerWage = (id) => {
        Axios.put("http://localhost:19007/updatewage", { wage: newWage, id: id }).then(
            (response) => {
                setEmployeeList(
                    employeeList.map((val) => {
                        return val.id == id
                            ? {
                                id: val.id,
                                name: val.name,
                                country: val.country,
                                age: val.age,
                                position: val.position,
                                wage: newWage,
                            }
                            : val;
                    })
                );
            }
        );
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

    /*const displayInfo = () => {
        console.log(name + age + country + position + wage);
    };
    */

    return (
        <View style={styles.container}>

            <Pressable
                onPress={getEmployees}
                title='VIEWCUSTOMERS'
                style={styles.button}>
                <Text style={styles.pressabletext}>VIEW CUSTOMERS</Text>
            </Pressable>

            <View>

                {employeeList.map((val, key) => {
                    return (
                        <View style={styles.row}>
                            <View className='text'>
                                <Text>Name: </Text>
                                {val.name}
                                <TextInput
                                    style={styles.textinput}
                                    type="text"
                                    placeholder=""
                                    placeholderTextColor={'black'}
                                    onChange={(event) => {
                                        setNewName(event.target.value);
                                    }}
                                    defaultValue={val.name}
                                />
                            </View>
                            <View>
                                <Text style={styles.margintop}>Age: </Text>
                                {val.age}
                                <TextInput
                                    width='150'
                                    style={styles.textinput}
                                    type="text"
                                    placeholder=""
                                    placeholderTextColor={'black'}
                                    onChange={(event) => {
                                        setNewAge(event.target.value);
                                    }}
                                    defaultValue={val.age}
                                />
                            </View>
                            <View>
                                <Text style={styles.margintop}>Country: </Text>
                                {val.country}
                                <TextInput
                                    style={styles.textinput}
                                    type="text"
                                    placeholder=""
                                    placeholderTextColor={'black'}
                                    onChange={(event) => {
                                        setNewCountry(event.target.value);
                                    }}
                                    defaultValue={val.country}
                                />
                            </View>
                            <View>
                                <Text style={styles.margintop}>Position: </Text>
                                {val.position}
                                <TextInput
                                    style={styles.textinput}
                                    type="text"
                                    placeholder=""
                                    placeholderTextColor={'black'}
                                    onChange={(event) => {
                                        setNewPosition(event.target.value);
                                    }}
                                    defaultValue={val.position}
                                />
                            </View>
                            <View>
                                <Text style={styles.margintop}>Wage: </Text>
                                {val.wage}
                                <TextInput
                                    style={styles.textinput}
                                    placeholder=""
                                    placeholderTextColor={'black'}
                                    onChange={(event) => {
                                        setNewWage(event.target.value);
                                    }}
                                    defaultValue={val.wage}
                                />
                            </View>
                            <View>
                                <Pressable
                                    style={styles.fontwhite}

                                    onPress={() => {
                                        updateCustomer(val.id);
                                    }}
                                >
                                    {" "}
                                    <Text>Update Customer </Text>
                                </Pressable>

                                <Pressable
                                    style={styles.fontwhitte}
                                    marginBottom={10}
                                    onPress={() => {
                                        deleteEmployee(val.id);
                                    }}
                                >
                                    <Text>Delete Customer </Text>
                                </Pressable>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        color: 'black',
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
        marginBottom: 20,
    },
    pressabletext: {
        color: '#eee',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textinput: {
        fontSize: 15,
        color: 'white',
        borderWidth: 1,
        borderColor: '#eee',
        padding: 2,
        borderRadius: 6,
        marginVertical: 3,
        width: 150,
        textAlign: 'center',
    },
    fontwhite: {
        color: 'white',
        fontWeight: 'bold',
    },
    fontwhitte: {
        color: 'white',
        marginBottom: 20,
    },
    marginbot: {
    },
    margintop: {
    },
    row: {
       flexDirection: 'row',
    },
});
