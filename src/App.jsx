
import './App.css'
import NavBar from './component/NavBar/NavBar'
import PriceOptions from './component/PriceOptions/PriceOptions'

// import DaisyNav from './component/daisyNav/daisyNav'

function App() {


  return (
    <>
    <NavBar></NavBar>
      <h1 className='text-2xl bg-rose-500 text-center font-bold'>Basic add to card</h1>
    {/* <DaisyNav></DaisyNav> */}
   <PriceOptions></PriceOptions>

    </>
  )
}

export default App
