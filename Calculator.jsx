import { useState } from "react";
import './Calculator.css';
function Calculator(){
    const [value,Setvalue] = useState('');
    return (
        <div className="container">
            <h1>CALCULATOR</h1>
            <div className="calculator">
                <form action="">
                    <div className="display">
                        <input type="text" value={value} />
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={e=>(Setvalue(''))}/>
                        <input type="button" value="DE" onClick={e=>(Setvalue(value.slice(0,-1)))}/>
                        <input type="button" value="." onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="/" onClick={e=>(Setvalue(value+e.target.value))}/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="8" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="9" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="*" onClick={e=>(Setvalue(value+e.target.value))}/>
                    </div>
                    <div>
                        <input type="button" value="4" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="5" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="6" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="+" onClick={e=>(Setvalue(value+e.target.value))}/>
                    </div>
                    <div>
                        <input type="button" value="1" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="2" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="3" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="-" onClick={e=>(Setvalue(value+e.target.value))}/>
                    </div>
                    <div>
                        <input type="button" value="00" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="0" onClick={e=>(Setvalue(value+e.target.value))}/>
                        <input type="button" value="=" className="equal"onClick={(e)=>{
                            try{
                                Setvalue(eval(value));
                            }
                            catch(error){
                                setTimeout(() => {
                                    Setvalue('');
                                }, 500);
                                Setvalue("error");
                            }
                        }}/>   
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Calculator;






