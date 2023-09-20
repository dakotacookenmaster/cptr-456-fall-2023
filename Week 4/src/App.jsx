import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar links={["Home", "About Us", "Contact Us"]} />
      <Navbar links={["Home"]} />
    </>
  )
}

export default App
