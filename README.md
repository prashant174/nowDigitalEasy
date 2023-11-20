# nowDigitalEasy
<h1 align="center">NowDigitalEasy Assignment</h1>

## Deployed link

<br>
https://mushy-shift-crab.cyclic.app/

<br>

## Installation

```
npm install
```

## Start the Backend server 

```


npm run server
```


<br>

##  MVC Structure

```

|   
├── nowDigitalEasy
     ├── config
     |    └── db.js
     |
     ├── controller
     |    └── User.controller.js
     |    
     ├── model
     |    └── User.model.js
     |    
     ├──routes
     |    └── User.route.js
     |    
     └── index.js
```
Things to do before starting the server:- 

-  create `.env` file and put "PORT", "MONGODB_URL", "secret".
- "PORT" is for listening the server.
- "MONGODB_URL" write your mongo url here.


<br>

## Schema 

<br>

<h3><strong>Schema for User</strong><h3>

```js

{
    "name": "enter your name ,
    "role": "enter your role ,
    "email": "enter your email here",
    "phoneNumber": "enter your phoneNumber here"
}
```


## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/addUser</td>
            <td>This endpoint should allow to add user</td>
            <td>201</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/getAllUser</td>
            <td>This endpoint should allow to get list of all users.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/getOneUser/:userId</td>
            <td>This endpoint use to get details of single user by passing there objectId in params</td>
            <td>200</td>
        </tr>
         <tr>
            <td>DELETE</td>
            <td>/deleteUser/:userId</td>
            <td>This endpoint is used to delete user by passing there objectId in params</td>
            <td>200</td>
        </tr>
         <tr>
            <td>PUT</td>
            <td>/updateUser/:userId</td>
            <td>This endpoint is used to update details of user by passing there objectId in params</td>
            <td>201</td>
        </tr>
       
    </tbody>
</table>


<br>

## Thank you for visiting

