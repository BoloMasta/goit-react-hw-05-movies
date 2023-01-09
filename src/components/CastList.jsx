import { List, Item, Image, Name, Character } from '../Styled/CastList';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(({ id, profile_path, name, character }) => (
        <Item key={id}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'https://dummyimage.com/200x300/2a2a2a/ffffff&text=No+image'
            }
            alt={name}
          />
          <Name>{name}</Name>
          <Character>Character: {character}</Character>
        </Item>
      ))}
    </List>
  );
};
