import { Fragment,useState } from "react";


function Calculator(){
    
    const [CurrentResult,setCurrentResult]=useState(0);

  
  
    const Add=(e)=>{
      let currentNum=parseInt(document.getElementById("number1").value);
      let currentNum2=parseInt(document.getElementById("number2").value);
      let result = currentNum + currentNum2;
      setCurrentResult(result);    
    }
    const Subtract=(e)=>{
        let currentNum=parseInt(document.getElementById("number1").value);
        let currentNum2=parseInt(document.getElementById("number2").value);
        let result = currentNum - currentNum2;
        setCurrentResult(result);    
      }
      const Multiply=(e)=>{
        let currentNum=parseInt(document.getElementById("number1").value);
        let currentNum2=parseInt(document.getElementById("number2").value);
        let result = currentNum * currentNum2;
        setCurrentResult(result);    
      }
      const Divide=(e)=>{
        let currentNum=parseInt(document.getElementById("number1").value);
        let currentNum2=parseInt(document.getElementById("number2").value);
        let result = currentNum / currentNum2;
        setCurrentResult(result);    
      }

    return(

    <Fragment> 

    
    <div form="cal-number" style={{textAlign: "center"}}>
      Number 1 : <input id="number1" type="text" name="number1"/><br></br><br></br>
      Number 2 : <input id="number2" type="text" name="number2"/><br></br><br></br>
      <button onClick={Add}>Add</button><br></br><br></br>
      <button onClick={Subtract}>Subtract</button><br></br><br></br>
      <button onClick={Multiply}>Multiply</button><br></br><br></br>
      <button onClick={Divide}>Divide</button><br></br><br></br>
      <span id="result">Result: {CurrentResult}</span>

    </div>



    </Fragment>
    );
}
       

        

export default Calculator;