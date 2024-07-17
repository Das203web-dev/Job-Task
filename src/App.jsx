import './App.css'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import Navbar from './components/CustomComponents/Navbar'
import Banner from './components/CustomComponents/Banner'
import Profile from './components/CustomComponents/Profile'
import Details from './components/CustomComponents/Details'
import Media from './components/CustomComponents/Media'
import UseData from './hooks/UseData'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import Card from './components/CustomComponents/Card'



function App() {
  // const [data] = UseData();
  // console.log(data, 'line 16');


  // this is how we can use useEffect to fetch data 
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(data => data.json())
  //     .then(res => console.log((res), 'line 24'))
  // }, [])

  return (
    <>
      {/* <h1 className='text-7xl'>Check</h1> */}
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='px-2 md:px-5 lg:px-0 bg-white  lg:w-4/5 xl:w-2/3 mx-auto'>
        <div className='bg-slate-50 md:px-5 px-2'>
          <div className='relative h-fit flex md:gap-10'>
            <div className='flex flex-col md:w-1/2 '>
              <Profile></Profile>
              <Details></Details>
            </div>
            <div className='md:w-1/2 hidden md:block'>
              <Media></Media>
            </div>
          </div>
          <Card></Card>
        </div>
      </div>

    </>
  )
}

export default App
