
const ConsultationForm =()=>{
   
    return(
        <div className="bg-gray-100 py-12 px-4 flex justify-center">
        <div className=" w-full bg-white p-8 rounded-lg shadow-lg">
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Need Help with Medical Billing? <br className="hidden md:block" /> 
            Book a Free Consultation Today!
          </h2>
          
          {/* Form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Phone Number Input */}
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Service Dropdown */}
            <select className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a Service</option>
              <option value="billing">Medical Billing</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </select>
            {/* Submit Button */}
            <div className="sm:col-span-2 flex justify-center mt-4">
              <button className="w-full sm:w-auto bg-[#09A8D4] text-white px-6 py-3 rounded-md ">
                BOOK FREE CONSULTATION
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default ConsultationForm