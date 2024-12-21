import { useState } from "react"

export default function Header() {

const [input, setinput] = useState([])
const [value, setvalue] = useState("")
const [check, setcheck] = useState({})

    function ReturnItems() {
        
        return input.map((prev, index) => (<form   className="flex items-center flex-row w-44  gap-5">
            <input key={index} checked={check[index] || false} onChange={() => SetChecked(index)} type="checkbox"></input>
            <div className={`${check[index] ? "line-through opacity-50" : ""} text-black`}>{prev}</div>
        </form>)
        
        )
    }

    function ToDoItem(e) {
        e.preventDefault()
        setinput((prev) => ([...prev, value ]))
        setvalue("")
    }
    function SetValue(e) {
        setvalue(e.target.value)
    }
    function SetChecked(index) {
        setcheck(prev => ({...prev, [index] : !prev[index]}))
    }
   return (
        <>
        <ul className="flex flex-col gap-8 justify-center items-center p-10">
            <li className="text-6xl underline font-medium">List</li>
            <li>
                <form onSubmit={ToDoItem} className="flex gap-4 flex-row">
                    <input onChange={SetValue} value={value} type="text" className="border-2" />
                    <button type="submit" className="underline" >Submit</button>
                </form> 
            </li>
            
            {ReturnItems()}
            
        </ul>
        
            
        

        
        
        </>
        
   )
}