import logo from './logo.svg';
import './App.css';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';



function App() {

const startarray = Array(5).fill(0);

const [ starcount, setstarcount] = useState();

const HandleClick = (indexcount) => {

  if(starcount == indexcount) {
    setstarcount(indexcount-1);
  } else {
    setstarcount(indexcount);
  }
  

}

const startcolor = {
  gray: "gray",
  solomon: "lightsalmon"
}


return (
    <div className='container'>
      <h2>Start rating in React</h2>
      <div>
        { startarray.map((start, index) => (
            (index < starcount) ? <StarIcon onClick = {()=> HandleClick(index+1)} sx={{fontSize:"3.5rem", color:"red"}}/> : 
            <StarIcon onClick = {()=> HandleClick(index+1)} sx={{fontSize:"3.5rem", color:"gray"}}/>
        ))}
          
      </div>
    </div>
  );
}

export default App;
