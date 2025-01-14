
import { Route, Routes,Navigate } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import Auth from './Pages/Auth'
import AllRecipes from './Pages/AllRecipes'
import ViewYourRecipe from './Pages/ViewYourRecipe'
function App() {

  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Auth/>}></Route>
      <Route path='/register' element={<Auth register/>}></Route>
      <Route path='/allrecipes' element={<AllRecipes/>}></Route>
      <Route path='/yourrecipes' element={<ViewYourRecipe/>}></Route>
      <Route path='*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
