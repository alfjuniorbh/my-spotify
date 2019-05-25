import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="https://www.google.com.br">Navegar</a>
        </li>
        <li>
          <a href="https://www.google.com.br">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="https://www.google.com.br">Seu daily music</a>
        </li>
        <li>
          <a href="https://www.google.com.br">Tocados recentemente</a>
        </li>
        <li>
          <a href="https://www.google.com.br">Músicas</a>
        </li>
        <li>
          <a href="https://www.google.com.br">Albuns</a>
        </li>
        <li>
          <a href="https://www.google.com.br">Artistas</a>
        </li>
        <li>
          <a href="https://www.google.com.br">Estações</a>
        </li>
        <li>
          <a href="https://www.google.com.br">Arquivos locais</a>
        </li>
        <li>
          <a href="https://www.google.com.br">Vídeos</a>
        </li>
        <li>
          <a href="https://www.google.com.br">Podcast</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="https://www.google.com.br">Melhores do Rock</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Nova Playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
