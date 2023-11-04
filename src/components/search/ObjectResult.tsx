import { AlbumType } from '../../types';

function ObjectResult({ searchResult }: { searchResult: AlbumType[] }) {
  return (
    <div>
      {searchResult.map((album) => (
        <div key={ album.collectionId }>
          <img src={ album.artworkUrl100 } alt={ album.collectionName } />
          <p>{album.collectionName}</p>
          <a
            data-testid={ `link-to-album-${album.collectionId}` }
            href={ `/album/${album.collectionId}` }
          >
            Ver detalhes
          </a>
        </div>
      ))}
    </div>
  );
}

export default ObjectResult;
