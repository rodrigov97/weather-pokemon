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

Run the command `yarn` to install all project dependencies.

Once the installation is done run the command `ng serve` on the terminal to start the application.

One time the project is running, access the port 4200 in your browser `http://localhost:4200/`.


## Using the application

In the single page of this app, there will be a input field so you can insert the city name.

![Main](/src/assets/screenshots/main.png?raw=true)

Once the city is inserted, just press enter or click the search button. After some seconds the data wil be displayed on screen.

![Result](/src/assets/screenshots/result.png?raw=true)

This screen will appear if no city was found.

![Not Found](/src/assets/screenshots/not-found.png?raw=true)

This one if the api key for the OpenweatherMap is invalid.

![Unauthorized](/src/assets/screenshots/unauthorizes.png?raw=true)

And this if the input has no value inserted.

![Empty](/src/assets/screenshots/empty.png?raw=true)


