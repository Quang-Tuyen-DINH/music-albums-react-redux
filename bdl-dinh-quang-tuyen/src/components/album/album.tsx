import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import AlbumDetails from "../../interfaces/albumDetails";
import { Card } from 'react-bootstrap';
import "./album.scss";

function Album(props: { album: AlbumDetails, type: string}) {
	const albumLabel: string = props.album.id.label;
	const name: string = props.album['im:name'].label;
	const artist: string = props.album['im:artist'].label;
	const artistId: string = props.album['im:artist'].attributes?.href;
	const imgUrl: string = props.album['im:image'][2].label;

  const [isShown, setIsShown] = useState(false);

  const dispatch = useDispatch();

	return (
		<div>
			<Card className="albumContainer"
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}>
				<div className="cardHeader">
					{isShown && (
						<div className="albumIcons" onClick={() => dispatch({ type: props.type, payload: props.album})}>
							<svg className="heartIcon" viewBox="0 0 16 16">
								<path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
							</svg>
							<div className="heartBg"></div>
						</div>
					)}
					<a href={albumLabel} target="_blank" rel="noopener noreferrer">
						<Card.Img variant="top" src={imgUrl} className="albumImg" />
					</a>
				</div>
				<Card.Body>
					<a href={albumLabel} target="_blank" rel="noopener noreferrer" className="albumName">{name}</a>
					<a href={artistId} target="_blank" rel="noopener noreferrer" className="artistName">{artist}</a>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Album;
