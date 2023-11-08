import { Link } from 'react-router-dom';
import { AlbumType } from '../../types';

function ObjectResult({ searchResult }: { searchResult: AlbumType[] }) {
  return (
    <div>
      {searchResult.map((album) => (
        <div key={ album.collectionId }>
          <img src={ album.artworkUrl100 } alt={ album.collectionName } />
          <p>{album.collectionName}</p>

          <Link
            to={ `/album/${album
              .collectionId}` }
            data-testid={ `link-to-album-${album.collectionId}` }
          >
            Ver Detalhes
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ObjectResult;
