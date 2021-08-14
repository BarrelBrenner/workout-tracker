Here is application for Workout Tracker

For this assignment you will need to install npm, to install it type in the following -- "npm init -y" -- which will give you a package.json file. After that you can install the dependencies required for your application to run. For this example it calls for the following dependencies --

    "express"
    "mongoose"
    "morgan"
    
To install these dependencies I would type the following -- "npm i (name of dependency)".
Once that's finished you can begin running the application which is titled the following --"node server.js".

This is deployed on Heroku while connected to MongoDB Atlas Database.
You would need to connect them together buy starting with the following --

1. Open up Heroku with the app you want to connect with
2. Click on Settings
3. Scroll down to Config Vars
4. Inside KEY box type in MongoDB_URI
5. Inside VALUE box type in mongodb+srv://<username>:<password>@<clusterName>.puqzm.mongodb.net/<databaseName>?retryWrites=true&w=majority

username = username of database (NOT MONGODB ACCOUNT INFO),
password = password of database (NOT MONGODB ACCOUNT INFO),
clusterName = name of cluster (i.e. Cluster0),
databaseName = name of database you created in MongoDB Atlas

NOTE -- where it says puqzm it'll be different for you once you create it so no need to worry.

Once information is filled in, save and restart all dynos for changes to take effect.

This application is a basic site where you can create your workout regimen on your schedule.
It also has a dashboard where you can track your progress for up to a week.

Thank your for your time & take care.