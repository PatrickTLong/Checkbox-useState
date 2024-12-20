export default function Header() {
   return (
        
        <ul className="flex flex-col gap-20 justify-center items-center p-5">
            <li className="text-7xl font-medium">To-Do List</li>
            <li>
                <form className="flex gap-4 flex-row">
                    <input type="text" className="border-2" />
                    <button type="submit" >Submit</button>
                </form> 
            </li>
        </ul>

   )
}