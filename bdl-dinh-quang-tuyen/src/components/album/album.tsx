import React from 'react'
import AlbumDetails from "../../interfaces/albumDetails"
import { Card, Button } from 'react-bootstrap';

function Album(props: {album: AlbumDetails}) {
  const name: string = props.album['im:name'].label;
  const artist: string = props.album['im:artist'].label;
	const imgUrl: string = props.album['im:image'][2].label;

  return (
    <div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={imgUrl} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>{artist}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
      <br></br>


    </div>
  )
}

export default Album
