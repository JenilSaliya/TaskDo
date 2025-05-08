# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Step by Step process for run project

first in your system have MongoDB, node.js, and VScode then open taskDo folder in your system

### step 1
open taskDo folder in your vscode then open terminal and run below command
>for install node moduels and run front-end and back-end open terminal of taskDo

```
//run this command
npm install 

//run front-end
npm run dev

// create new terminal and run backend
npm run backend
```
from this you get url of your front-end and back-end

### step 2
 create .env file in taskDo folder and Backend folder 

>Backend .env file add 
```
    Mongo_URI = your mongodb uri   (ex: "mongodb://localhost:27017/" make sure url end with / )

    React_URI = your front end url (ex: "http:localhost:5173")

    Host_URI = your back end url (ex: "http://localhost:3000/" make sure url end with /)

    port = port to run backend (ex:3000)
```


 >taskDo .env file add backend URL you can get backend uri by run backend
```
    // In taskDo .env file 
    VITE_Backend_URI: your uri   (ex:"http://localhost:3000")
 ``` 

 ### step 3 
 now again run front-end and back-end 
 ```
 //if your last front-end and back-end is running then close both terminal

//create two new terminal and run one command in different terminal 


//run front-end
npm run dev

// run this command in new terminal for  run backend
npm run backend
```

now you get url of front-end by ctrl+click you can run project

