import { useState } from 'react'
import './App.css'
import { Card } from './components/Card/Index.jsx'
import { ListCard } from './components/ListCard/Index.jsx'
import { SearchForm } from './components/SearchForm/Index.jsx'

function App() {
  const trainers = []
  return (
    <>
      <SearchForm/>
      <Card name='Jorge' alias='Santacruz'/>
      {
        trainers.length > 0 ? (
          <ListCard>
          {trainers.map(element =>{
            return(
              <Card key={element.id} name={element.name} alias={element.originalName}/>
            )
          })
          }
          </ListCard>
        ):(<div>Sin entrenadores</div>)
      }
      
    </>
  )
}

export default App
