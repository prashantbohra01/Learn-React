import Card from "./components/Card.jsx"
import Sdata from "./components/Sdata.jsx"

function App() {
  return (
    <>
    <h1 className="heading_style">Top 5 NetFlix Series of 2024</h1>
     {Sdata.map((val)=>{
      return (
        <Card 
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
      );
     })}
    </>
  )
}

export default App
