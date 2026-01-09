import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const imgArr = [img1, img2, img3];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="image-gallery">
        {imgArr.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Image ${index + 1}`} className="gallery-image" />
        ))}
      </div>
      <img src="https://images.danicloudflare.eu/Music-Shutterstock-scaled.jpg" alt="Static Image" />
      
    </>
  )
}

export default App
