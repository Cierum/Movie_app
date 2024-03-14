import MovieCard from "./MovieCard"

export default function MovieList({movieList}) {
    return(
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-normal flex-wrap">
                    {
                    movieList.map(movie => <MovieCard movie={movie} key={movie.id}/>)
                    }
                </div>
            </section>
        </main>
    )
}