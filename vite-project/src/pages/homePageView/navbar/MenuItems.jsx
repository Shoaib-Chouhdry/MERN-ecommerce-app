import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown ,faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"
import { useState } from "react";

const MenuItems =()=>{

      const [open ,setOpen] = useState("")
   
    return(
        <div className="flex gap-4 md:flex-row flex-col z-10 ">
           <Link>Home</Link>
           
           <Link to="/shop/listing">Shop</Link>
        </div>
    )
}
export default MenuItems