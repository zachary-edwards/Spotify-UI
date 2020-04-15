import React, { useEffect, useState } from 'react'
import { GetTopArtists } from '../services/SpotifyService'

function TopArtist(props) {
    const [loadMore, setLoadMore] = useState(false)
    const [topArtists, setTopArtists] = useState([{id: '', name: 'loading'}])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getArtists = async () => {
            let data = await GetTopArtists()
            setIsLoading(false)
            setTopArtists(data)
            console.log(data)
        }

        getArtists()
    }, [loadMore])

    const getImage = (topAritst) => {
        if(!topAritst || !topAritst.images || !topAritst.images.length > 0)
            return
        let url = topAritst.images[0].url

        return (
            <img src={url} alt={`topArtist-${topAritst.name}`} className='avatar' align='left'/>
        )
    }

    return (
        <div className='cards'> 
            {topArtists.map((topArtist) => 
                <div key={`${topArtist.id}`} className='card'> 
                    {getImage(topArtist)}
                    {topArtist.name}
                </div>
            )}
            hello
        </div> 
    )
}

export default TopArtist