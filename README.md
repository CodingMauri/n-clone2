# Netflix Clone
- I decided to clone netflix using React and Talwind for the front-end and also using TMDb database for the movies. The database only gives trailers and not full movies.
- The user should be able to go ahead on the site and click on any movie and then they will be shown a trailer for the movies.
- User should be able to search movies the movies they want
- Users should also be able to create an account and save movies which it will be stored in their saved movies tab

## Live-Site
https://netflix-clone2-3aad4.web.app/

## Design 
![image](https://github.com/CodingMauri/n-clone2/assets/106369465/47a653ab-2719-4fb9-821c-5fd5015ff785)

- I was aiming more for the tv look of netflix rather than the website design they have, obviously all credit goes to them and this is purely for react practice and practicing my skills
  
## Technologies
- React
- TailwindCSS
- React-Slick
- Framer-motion
- Google Firebase
- TMDB's API

## Key-Code Snippet

```

const withGenre = (WrappedComponent, genre) => {
  return (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${genre}`
        )
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
    return <WrappedComponent movies={movies} genre={genre} {...props} />;
  };
};
export const ActionMovies = withGenre(MovieCarousel, 28);
export const ComedyMovies = withGenre(MovieCarousel, 35);
export const HorrorMovies = withGenre(MovieCarousel, 27);
export const AnimatedMovies = withGenre(MovieCarousel, 16);
export const CrimeMovies = withGenre(MovieCarousel, 80);

```

- An issue i ran into was the genre filtering and keeping it all on one page. Netflix has their movies seperated by genre and all in one page and i was trying to figure out a way to do that without having to hardcode individual components and mapping through the api for each genre. I would have ended up with like 8 different components and I was really trying to keep the code as DRY as possible. So i came up with a Higher Ordered Component (HOC). This takes a component as an argument and returns basically an enhanced version of that component.
- Here the code was taking in the wrapped component which is going to be my movie carousel and the genre ID i wanted so that it can then take those parameters and make an axios call with those specific id's and returning me the movies filtered by genre and that they go along with my MovieCarousel component. This way i was able to make 5 other components and kept my code DRY

## Future Improvements

- I want to add a modal that displays more movie information and movies that are like the one the user chose.

