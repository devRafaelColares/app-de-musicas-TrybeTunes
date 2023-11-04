import { useState } from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import LoadingMsg from '../loading-msg/Loading';
import ObjectResult from './ObjectResult';
import { AlbumType } from '../../types';

function Search() {
  const [artistName, setArtistName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchedArtist, setSearchedArtist] = useState('');
  const [searchResult, setSearchResult] = useState<AlbumType[]>([]);

  const handleSearch = async () => {
    setIsLoading(true);
    const albums = await searchAlbumsAPI(artistName);
    setIsLoading(false);
    setSearchedArtist(artistName);
    setSearchResult(albums);
    setArtistName('');
  };

  return (
    <>
      {isLoading ? (
        <LoadingMsg />
      ) : (
        <form>
          <label htmlFor="band-or-artist">
            Insira seu artista ou banda favorita!
            <input
              id="band-or-artist"
              value={ artistName }
              onChange={ ({ target }) => setArtistName(target.value) }
              type="text"
              data-testid="search-artist-input"
            />
          </label>
          <button
            data-testid="search-artist-button"
            disabled={ artistName.length < 2 }
            onClick={ handleSearch }
          >
            Pesquisar
          </button>
        </form>
      )}
      {searchResult.length > 0 ? (
        <div>
          <h1>
            Resultado de álbuns de:
            {' '}
            {searchedArtist}
          </h1>
          <ObjectResult searchResult={ searchResult } />
        </div>
      ) : (
        <h2>Nenhum álbum foi encontrado</h2>
      )}
    </>
  );
}

export default Search;
