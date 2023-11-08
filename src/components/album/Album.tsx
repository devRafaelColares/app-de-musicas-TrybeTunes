import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';
import LoadingMsg from '../loading-msg/Loading';
import MusicCard from '../music-card/MusicCard';

function Album() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<[AlbumType, ...SongType[]] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setLoading(true);

        const result = await getMusics(id as string);
        setData(result);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <LoadingMsg />;
  }

  return (
    <div>
      {data ? (
        <>
          <h1 data-testid="artist-name">{data[0].artistName}</h1>
          <h2 data-testid="album-name">{data[0].collectionName}</h2>
          {data.slice(1).map((item) => (
            'trackName' in item && 'previewUrl' in item ? (
              <MusicCard
                key={ item.trackId }
                trackName={ item.trackName }
                previewUrl={ item.previewUrl }
              />
            ) : null
          ))}
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Album;
