import { useState,useEffect } from "react"

const ImageSlider =()=>{
   
   const imagesData =[
        {
          id:1,
          siteName: "HelloMds",
          title : "End To End Revenue Cycle Management",
          description : "we specialize in delivering cutting-edge solutions tailored to your needs. Whether you're looking for innovative technology, professional services, or strategic business growth, we are committed to providing excellence with every step.",
          img : "https://images.unsplash.com/photo-1739643247007-044e2623ca98?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          buttonText : "Read More",
        },
        {
            id:2,
            siteName: "Hello",
            title : "End To End Revenue Cycle Management",
            description : "we specialize in delivering cutting-edge solutions tailored to your needs. Whether you're looking for innovative technology, professional services, or strategic business growth, we are committed to providing excellence with every step.",
            img : "https://images.unsplash.com/photo-1665731372479-551841cac2c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            buttonText : "View Specialities",
        },
        {
          id:3,
          siteName: "HelloThere",
          title : "End To End Revenue Cycle Management",
          description : "we specialize in delivering cutting-edge solutions tailored to your needs. Whether you're looking for innovative technology, professional services, or strategic business growth, we are committed to providing excellence with every step.",
          img : "https://images.unsplash.com/photo-1665731372479-551841cac2c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          buttonText : "About Us",
      },

  ]     

     const [current,setCurrent] = useState(0);
     const nextSlide = () => {
      setCurrent((prev) => (prev === imagesData.length - 1 ? 0 : prev + 1));
    };
  
   
    useEffect(() => {
      const slideInterval = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval);
    }, []);


    return(
        // <div className=" h-[80vh] overflow-hidden mx-4 z-30 rounded-lg ">
        //   <div className="w-max h-full flex transition-all ease-in-out duration-1000  " 
        // style={{transform:`translateX(-${current*100}vw)`}}>
        //    {
        //      imagesData.map((data) => (
        //       <div key= {data.id} className="relative w-full h-full  overflow-hidden" >
                  
        //            <img src={data.img} className="w-screen h-full  object-cover animate-[zoomRight_5s_ease-in-out_infinite]"/>  
              
                
        //            <div className="absolute inset-0  bg-gradient-to-r from-black to-transparent "></div>
                    
        //             <div className="absolute inset-0 w-3/4 bg-opacity-50 text-white flex  items-start justify-start p-16 md:pl-56 md:pt-24 ">
        //               <div>
        //               <h6>{data.siteName}</h6>
        //               <h1 className="text-4xl">{data.title}</h1>
        //               <p className="max-w-[600px] whitespace-normal">
        //                  {data.description} 

        //               </p>
        //               <div className="pt-2">
        //               <button className="bg-[#09A8D4] text-white p-2   rounded-lg "> {data.buttonText}</button>
        //               </div>
        //               <span className=" hidden md:flex  gap-2 w-1/2 pl-16 py-16" >
        //               <button
        //                     className="bg-[#09A8D4] text-white px-2 h-10  w-[80px] rounded-lg"
        //                     onClick={() => setCurrent((pre) => (pre === 0 ? imagesData.length - 1 : pre - 1))}
        //                   >
        //                        Previous
        //                   </button>
        //               <button className="bg-[#09A8D4] text-white px-2 h-10  w-[80px] rounded-lg"onClick={() => setCurrent((pre) => (pre === imagesData.length - 1 ? 0 : pre + 1))}>
        //                       Next
        //                   </button>
                          
        //                   </span>
        //               </div>
                      
                      
        //               {/* <span className=" hidden md:flex flex-col gap-2 w-1/4 pl-16 py-16" >
                      
        //               </span>   */}
        //             </div>
                   
                   
        //       </div>
                   

        //      ))

        
        //     }
        //     </div>
        // </div>

        <div className="h-[80vh] overflow-hidden mx-4 z-30 rounded-lg relative">
        {/* Slider Wrapper */}
        <div
          className="w-max h-full flex transition-all ease-in-out duration-1000"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {imagesData.map((data) => (
            <div key={data.id} className="relative w-full h-full overflow-hidden">
              {/* Image */}
              <img
                src={data.img}
                className="w-screen h-full object-cover animate-[zoomRight_5s_ease-in-out_infinite]"
              />
      
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      
              {/* Content */}
              <div className="absolute inset-0 w-full text-white flex flex-col justify-center p-6 sm:p-12 md:pl-24">
                <h6 className="text-sm sm:text-base">{data.siteName}</h6>
                <h1 className="text-2xl sm:text-4xl font-bold">{data.title}</h1>
                <p className="max-w-[90%] sm:max-w-[600px] text-sm sm:text-base mt-2">
                  {data.description}
                </p>
      
                {/* Buttons */}
                <div className="pt-4 flex flex-wrap gap-2">
                  <button className="bg-[#09A8D4] text-white px-4 py-2 text-sm sm:text-base rounded-lg">
                    {data.buttonText}
                  </button>
                  </div>  
                  <div className="hidden md:flex gap-2 pt-4">
                    <button
                      className="bg-[#09A8D4] text-white px-4 py-2 text-sm sm:text-base rounded-lg"
                      onClick={() =>
                        setCurrent((prev) => (prev === 0 ? imagesData.length - 1 : prev - 1))
                      }
                    >
                      Previous
                    </button>
                    <button
                      className="bg-[#09A8D4] text-white px-4 py-2 text-sm sm:text-base rounded-lg"
                      onClick={() =>
                        setCurrent((prev) => (prev === imagesData.length - 1 ? 0 : prev + 1))
                      }
                    >
                      Next
                    </button>
                  </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
      
           )
}
export default ImageSlider
























