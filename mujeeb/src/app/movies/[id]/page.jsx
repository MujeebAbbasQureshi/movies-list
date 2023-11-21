import { getMoviesDetails } from "../../../../utils/requests"

async function MovieDetailPage({params}){
    const IMAGE_BASE_URL ='https://www.themoviedb.org/t/p/w116_and_h174_face'
    
    const movieDetails = await getMoviesDetails(params)
    return(
        <h2>page</h2>
    )
}
export default MovieDetailPage