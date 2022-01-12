# Movies Now

Movies Now is a react app to search for movies and add them to your list. This app uses data from [TMDB](https://www.themoviedb.org/documentation/api)
API.

## Demo

Currently hosted on Netlify, please click link to see the live site : [Live Demo](https://movies-now-react.netlify.app/)

## Features
* Home page header features a randomly selected upcoming movies with its genres and link to youtube trailer.
* Scroll through featured movie lists on home page.
* Each movie card shows the movie poster, released year, a short description & TMDB rating.
* Clicking on movie card opens a modal with a custom url showing the poster, title, genres, link to YouTube trailer, button to save the movie to your list, released year, length of the movie, TMDB rating, status of the movie (whether it is released or not) and names of production companies.
* Clicking on heading of lists on homepage also shows all movies in that corresponding list.
* Browing each category/list of movies renders the movies in a "infinte scroll" manner. i.e. App renders first 20 results when you open the page and as you scroll down to the bottom more movies are fetched from the API and rendered to the screen.
* When you add movies to your list, it is saved on the redux store as well as local storage, so the next time you visit the website your movie lists are automatically fetched from the local storage.

## Preview

![Movies-Now-React](https://user-images.githubusercontent.com/17625782/149066346-813d3972-047a-4e1c-b602-ae6ed0b49f38.png)


https://user-images.githubusercontent.com/17625782/149072659-38a86c4b-fb1f-4486-8f9c-ee0dcbaefeea.mp4

