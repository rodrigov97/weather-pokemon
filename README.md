# WeatherPokemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6. in a linux Ubuntu 20.04.

# Technologies used

* Angular CLI;
* Docker;
* Git (To store the project);
* Yarn;

# Softwares

* Chrome browser;
* Visual Studio Code;

# How to use


## Setup


## With Docker

Run the command `docker-compose up` to initiate the container, if you dont have the image, he will create it for you;


## With ng serve

Run the command `yarn install` to install all project dependencies.

Once the installation is done run the command `ng serve` on the terminal to start the application.

One time the project is running, access the port 4200 in your browser `http://localhost:4200/`.


## Using the application

In the single page of this app, there will be a input field so you can insert the city name.

<p align="center">
<img src="/src/assets/screenshots/main.png" alt="Main" width="600" height="auto">
</p>

Once the city is inserted, just press enter or click the search button. After some seconds the data wil be displayed on screen.

<p align="center">
<img src="/src/assets/screenshots/result.png" alt="Result" width="600" height="auto">
</p>

This screen will appear if no city was found.

<p align="center">
<img src="/src/assets/screenshots/not-found.png" alt="Not Found" width="600" height="auto">
</p>

This one if the api key for the OpenweatherMap is invalid.

<p align="center">
<img src="/src/assets/screenshots/unauthorized.png" alt="Unauthorized" width="600" height="auto">
</p>

And this if the input has no value inserted.

<p align="center">
<img src="/src/assets/screenshots/empty.png" alt="Empty" width="600" height="auto">
</p>

## Mobile
<p align="center">
<img src="/src/assets/screenshots/mobile-main.png" alt="Empty" width="auto" height="600"> <img src="/src/assets/screenshots/mobile-result.png" alt="Empty" width="auto" height="600">
</p>

