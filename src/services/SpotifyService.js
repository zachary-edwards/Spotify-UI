import Axios from 'axios'

export const GetTopArtists = async () => {
    let options =  {
        method: 'get',
        url: 'http://localhost:5000/TopArtist/'
    }
    let res = await Axios(options)
    
    if (res.data)
        return res.data
}