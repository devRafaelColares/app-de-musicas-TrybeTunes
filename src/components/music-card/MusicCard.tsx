import React from 'react';

type MusicCardProps = {
  trackName: string;
  previewUrl: string;
};

function MusicCard({ trackName, previewUrl }: MusicCardProps) {
  return (
    <div>
      <h3>{trackName}</h3>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
        .
        <track kind="captions" />
      </audio>
    </div>
  );
}

export default MusicCard;
