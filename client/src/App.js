import React from 'react'
import Layout from './Components/Layout'
import { Routes, Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import RoomsPage from './Pages/RoomsPage'
import RoomPage from './Pages/RoomPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/rooms' element={<RoomsPage />} />
        <Route path='/rooms/:id' element={<RoomPage />} />
        <Route path='/about' element={<h1>À propos</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
        <Route path='*' element={<h1>Not Found 404</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;