import './App.css';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {}


if(curDate >= 1 && curDate < 12){
  greeting = "Good Morning";
  cssStyle.color = 'green';
}else if(curDate>=12 && curDate<19){
  greeting = "Good Afternoon";
  cssStyle.color = 'orange';
}else{
  greeting = "Good Night";
  cssStyle.color = "blue";
}

function App() {
  return (
    <>
    <h1 className='head'>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
    </>
  );
}

export default App;
