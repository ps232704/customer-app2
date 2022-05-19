# customer-app2
npm packages need to be installed for the project. if you don't install all the npm packages it will not function and it will give you many errors! if some npm packages give errors while downloading ctrl c and "yarn add package".

If you want to start the project follow these steps:
- Open your commandprompt in windows. now find a file you want to create a new folder in. you can do that by "cd 'filename'". if you want to get out of a folder enter "cd..".
- Now enter "expo init 'testapp'" this will make the app.
- You can now go to the file on the commandprompt with "cd testapp" or however you called your project of course. and typ "code .". this will open visual studio code. the editor you are using to enter the code.
- Open wamp. and then open your database mysql (probably http://localhost/phpmyadmin/).
- Make a new database and make a table (call it customer if you want to). Make 6 columns for the customer.
- The first one will be the id this needs to be a key so that it will be always different (check A_I and index will be PRIMARY). The second one will be the name this needs to be a varchar. The third one needs to be the age this needs to be a int, because it is a number. The fourth one is for the country and it is a varchar. The fifth one is also a varchar, this one is for the position of the customer. The last one is the wage of the customer, this needs to be an int just like the age, because it is a number.
- What you want to do now is to add the code in the app.
- Once this is done the only thing you need to do to the project is to change the database settings. So you probably need to change the database-name or the user. You can find this code in the index.js on line 12-17. Or you haven't added the npm packages yet.
- Open 2 terminals in vsc (ctrl+j and ctrl+shift+5 to split the terminal in 2). 
- Typ in one of them "node index.js". This will start the index.js code. If you done this there will be an automatic respone that says "databse is connected succesfully on port 19007!!!!!!". If this is not the case your code on line 12-17 (index.js) is not correct to your database settings.
- Typ in the second one "expo start". This will start the whole project. You can now press w to open the project in a new chrome tab!

# npm packages

the commands to install a npm package need to be typed in the terminal in vsc. you can open the terminal by ctrl+j.

| Full npm package name | Package  | Version | How to install |
| :------------- | :------------- | :------------- | :------------- |
| @babel/core@7.17.9 |  @babel/core | 7.17.9  | auto installed (already installed if you make a new project)|
| axios@0.26.1 | axios  | 0.26.1  | npm install axios@0.26.1 |
| cors@2.8.5 | cors  | 2.8.5  | npm install cors@2.8.5 |
| expo-status-bar@1.2.0 | expo-status-bar  | 1.2.0  | auto installed (already installed if you make a new project)|
| expo@44.0.6 | expo  | 44.0.6  | auto installed (already installed if you make a new project)|
| express@4.17.3 | express  | 4.17.3  | npm install express@4.17.3 |
| mysql@2.18.1  | mysql  | 2.18.1  | npm install mysql@2.18.1 |
| react-dom@17.0.1 | react-dom  | 17.0.1  | auto installed (already installed if you make a new project)|
| react-native-gesture-handler@2.1.3 | react-native-gesture-handler  | 2.1.3  | npm install react-native-gesture-handler@2.1.3 |
| react-native-web@0.17.1 | react-native-web  | 0.17.1  | auto installed (already installed if you make a new project)|
| react-native@0.64.3 | react-native  | 0.64.3 | auto installed (already installed if you make a new project)|
| react-navigation-drawer@2.7.2 | react-navigation-drawer  | 2.7.2  | npm install react-navigation-drawer@2.7.2 |
| react-navigation-stack@2.10.4 | react-navigation-stack  | 2.10.4  | npm install react-navigation-stack@2.10.4 |
| react-navigation@4.4.4 | react-navigation  | 4.4.4  | npm install react-navigation@4.4.4 |
| react@17.0.1 | react  | 17.0.1  | auto installed (already installed if you make a new project)|
