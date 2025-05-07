const Button = ({icon,label}) =>{

    return(
    <button className="bg-[#09A8D4] text-white p-4 rounded-2xl flex items-center justify-center gap-2">
    
    {label}
    {icon}
    
    </button>
    
    
    )
    
    
    
    }
    export default Button ;