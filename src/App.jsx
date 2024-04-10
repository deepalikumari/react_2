import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}
let data = imageData()
function App() {
  // code here
  let divstyle = {
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    marginLeft:"5vw",
    rowGap:"50px"
    

  }

  return(
    <>
    <h1 style={{textAlign:"center"}}>Kalvium Gallery</h1>
    <div style={divstyle}>
      <img src={data[0].img} alt="" width={"500px"}/>
      <img src={data[1].img} alt="" width={"500px"}/>
      <img src={data[2].img} alt="" width={"500px"}/>
      <img src={data[3].img} alt="" width={"500px"}/>

    </div>
    </>
  )
}

export default App;