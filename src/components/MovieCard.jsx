export default function MovieCard({movie}) {
    const {title, overview, poster_path} = movie;

    const imgSrc = `https://image.tmdb.org/t/p/w500${poster_path}.jpg` 
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-3 dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" 
                    src={imgSrc} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                        >{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                    >{overview ? overview : '설명없음'}</p>
                    
                </div>
            </div>
    )
}