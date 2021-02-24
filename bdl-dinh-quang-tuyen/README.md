## Getpro music website
Getpro's new music website.

## Company's need
Getpro is branching into the music business and they need a new responsive website. This website needs to display the top 100 songs based on the iTunes API.

## Structure
The website is composed by 2 main parts: 
- **Containers**: The **App** is the global container which contains the **Album list** and the **Favorite list**
- **Components**: The **Album** permits to display album's details, meanwhile **Search bar** permits to search for albums
It uses data from model **Albums** whom fetches the iTunes API and returns an array of 100 objects.
## Screenshots
![Screenshot](./public/screenshot.jpg)

## Tech/framework used
<b>Built with</b>
- [Typescript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Bootstrap](https://getbootstrap.com/)

## API Reference
[iTunes API](https://itunes.apple.com/us/rss/topalbums/limit=100/json)

## Features
The websites permits to display a list of top 100 searchable albums, beside, user can add favorite album(s) by clicking the image of each album, then the favorite album(s) will be displayed on the left. User can also delete album(s) from favorite list by clicking on the image of the album.

## How to use
In the terminal of the IDE, type:
- `npm install`
- `npm run start`
- Open browser at `http://localhost:3000/`

## Contact
- Mail: quangtuyen.dinh.0403@gmail.com
- Github : [Quang-Tuyen-DINH](https://github.com/Quang-Tuyen-DINH)