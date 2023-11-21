
import Image from 'next/image'
import style from './page.module.css'
import { getTrendingMovies } from '../../utils/requests'
import Card from './component/Card';


export default async function HomePage() {
  const movies = await getTrendingMovies();
  return (
    
<div className='container my-3'>

<h1>Top Trending Movies</h1>
<div className='d-flex flex-wrap gap-3'>
  {movies.map(movie => {
    return <Card movie={movie}></Card>
  } )}
</div>

</div>
  )
}
  
  

