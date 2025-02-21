import React from 'react'
import MyBook from './components/MyBook.jsx'
import BgTexture  from "./assets/wood2.jpeg";


const  BgTextureStyle ={
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};
const App = () => {
  return (
    <div style={BgTextureStyle} className='w-full h-full flex justify-center items-center'>
      <MyBook/>
    </div>
  )
}




export default App;




