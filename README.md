# Angular 2 Manage videos (CRUD operations) (ExpressJS + MongoDB)  
I replaces ExpressJS server and MongoDB with angular-in-memory-web-api in my <a href="https://github.com/alexbra/ytplayer-manage">previous project</a>. 
For this purpose I consume Mongoose. 

All differences with previous project only in two places. I add bin/www and app.js files to handle ExpressJS and MongoDB and remove all angular-in-memory-web-api files and modules.

## Installation
To use this code you need to install MongoDB and create any database. 

```bash
git clone  https://github.com/alexbra/ytplayer-express-mongo  my-proj
cd my-proj
npm i 
```

Open another terminal window
Connect to your mongo database
```bash
cd path_to_mongodb_folder/bin
mongod --path/to/your/database
```

In first window run application 
```bash
npm start
```

Open http://localhost:3000/

