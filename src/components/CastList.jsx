export const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'https://dummyimage.com/200x300/2a2a2a/ffffff&text=No+image'
            }
            alt={name}
            width="200"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
