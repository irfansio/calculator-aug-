
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
const[amount,setamount]=useState(0);//user input 100
const [year,setYear]=useState(0);//5year
const [rate,setRate]=useState(0);//3


const[intrest,setintrest]=useState(0);//result intrest

const calculate=(evnt)=>{
  const output=amount*year*rate/100;
  console.log(output);
  setintrest(output);
}

const reset=(evnt)=>{
setamount(0);
setYear(0);
setRate(0);
setintrest(0);
}

  return (
    <div className="App">
    <div className="container">
      <div className="header">
        <h1>simple intrest calculator</h1>
        <p>calculate simple intrest calculate with us</p>
      </div>

<div className="total">
  <h2><span>&#8377; {intrest}</span></h2>
  <p>total intrest</p>
</div>

<div className="form">
  <div className="input">
  <TextField id="outlined-basic" value={amount||""}onChange={(evnt)=>setamount(evnt.target.value)} label="amount" variant="filled" />
  <br />
  <TextField id="outlined-basic"value={year||""} onChange={(evn)=>setYear(evn.target.value)} label="year" variant="outlined" />
  <br />
  <TextField id="outlined-basic"value={rate||""}onChange={(evnt)=>setRate(evnt.target.value)} label="rate" variant="outlined" />
  </div>

  <div className="button">
  <Button variant="contained"onClick={e=>calculate(e)}>Calculate</Button>
  <Button variant="outline"onClick={e=>reset(e)}>reset</Button>
  </div>
</div>

    </div>
    </div>
  );
}

export default App;