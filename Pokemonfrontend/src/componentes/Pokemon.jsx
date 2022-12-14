import React from 'react'
import PokemonImage from './PokemonImage'


const Pokemon = ({type, name , img , id}) => {
  return (
    <>
    

    <div className={`flex flex-col w-[180px] m-[10px] justify-between h-[180px] bg-white rounded-xl borde${type} border-2 hover:shadow-lg`}>
      <div className={`flex justify-end pr-[10px] pt-[5px] text${type}`}>
          {(() => {
            if (id<10) {
              return (
                <p className='font-bold'>#00{id}</p>
              )
            } else {
              return (
                <p className='font-bold'>#0{id}</p>
              )
            }
          })()}
        </div>
      <div className='flex items-center justify-center'>
          <PokemonImage
            img={img}
            />
      </div>
      <div className={`w-full h-[25px]  flex items-center  justify-center text-white ${type} rounded-b-[5px]`}>
          <h3 className='font-light capitalize'>{name}</h3>
          
      </div>
    </div>
    
    
    </>
  )
}

export default Pokemon