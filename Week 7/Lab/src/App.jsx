import { useEffect, useState } from 'react'
import './App.css'
import Video from './components/Video'

const BASE_ADDRESS = "https://videostar.dacoder.io/"

function App() {
  // provide state to store our videos
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFreeFilter, setIsFreeFilter] = useState(false)


  // Fetch the data from our video API
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const response = await fetch(BASE_ADDRESS)
      const data = await response.json()
      setVideos(data)
      setIsLoading(false)
    })()
  }, [])

  const handleIsFreeFilter = (event) => {
    const { checked } = event.target

    setIsFreeFilter(checked)
  }

  return (
    <div style={{
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      flexWrap: "wrap",
    }}>
      <div>
        Filter by only free: <input type="checkbox" onChange={handleIsFreeFilter} />
      </div>
      <h1>Recommended Videos</h1>
      {
        videos.filter(video => !video.isFree).slice(0, 3).map(video => <Video key={video.id} data={video} />)
      }
      <hr />
      {
        videos
          .filter(video => isFreeFilter ? video.isFree : true)
          .filter(video => video.name.toLowerCase().includes("woman"))
          .sort((a, b) => a.name < b.name)
          .map(video => <Video key={video.id} data={video} />)
      }
    </div>
  )
}

export default App
