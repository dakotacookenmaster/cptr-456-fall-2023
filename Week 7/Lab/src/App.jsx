import { useEffect, useState } from 'react'
import './App.css'
import Video from './components/Video'

const BASE_ADDRESS = "https://videostar.dacoder.io/"

function App() {
  // provide state to store our videos
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(false)


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

  return (
    <div style={{
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      flexWrap: "wrap",
    }}>
      {
        videos.map(video => <Video key={video.id} data={video} />)
      }
    </div>
  )
}

export default App
