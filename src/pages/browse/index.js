import React from 'react';

import {
  Container, Title, List, PlayList,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <PlayList href="">
        <img
          src="https://www.billboard.com/files/styles/900_wide/public/media/cardi-b-invasion-of-privacy-album-art-2018-billboard-embed.jpg"
          alt="Playlist"
        />
        <strong>Rock dos Bons</strong>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </PlayList>
      <PlayList href="">
        <img
          src="https://www.billboard.com/files/styles/900_wide/public/media/cardi-b-invasion-of-privacy-album-art-2018-billboard-embed.jpg"
          alt="Playlist"
        />
        <strong>Rock dos Bons</strong>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </PlayList>
      <PlayList href="">
        <img
          src="https://www.billboard.com/files/styles/900_wide/public/media/cardi-b-invasion-of-privacy-album-art-2018-billboard-embed.jpg"
          alt="Playlist"
        />
        <strong>Rock dos Bons</strong>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </PlayList>
      <PlayList href="">
        <img
          src="https://www.billboard.com/files/styles/900_wide/public/media/cardi-b-invasion-of-privacy-album-art-2018-billboard-embed.jpg"
          alt="Playlist"
        />
        <strong>Rock dos Bons</strong>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
