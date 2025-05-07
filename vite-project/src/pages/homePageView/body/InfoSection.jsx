export default function InfoSection() {
    return (
      <div className="bg-gray-100 py-12 px-4 flex justify-center">
  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
    {/* Left Section */}
    <div className="bg-[#09243C] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between min-h-full">
      <h2 className="text-2xl font-semibold ">We are here for you.</h2>
      <p className=" mt-2">
        Call us or schedule a meeting, and we’ll audit your model, identify key areas for improvement, and present tailored solutions to help you succeed.
      </p>
      <ul className="mt-4 space-y-2 ">
        <li>✔️ Reach Out to Us</li>
        <li>✔️ Comprehensive Practice Audit</li>
        <li>✔️ Custom Solutions Proposal</li>
        <li>✔️ Seamless Onboarding</li>
        <li>✔️ Ongoing Billing Management</li>
        <li>✔️ Transparent Reporting & Support</li>
      </ul>
      <button className="mt-6 bg-[#09A8D4] text-white px-6 py-3 rounded-md ">
        Read More →
      </button>
    </div>

    {/* Right Section */}
    <div className="flex flex-col justify-between min-h-full">
      <div className="flex flex-col space-y-6 h-full">
        {/* Our Vision */}
        <div className="flex-1 bg-[#09243C] to-blue-400 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="bg-[#09A8D4] p-2 rounded-full">
              <span className="text-blue-500 text-xl">👨‍⚕️</span>
            </div>
            <h3 className="text-xl font-semibold">Our Vision</h3>
          </div>
          <p className="mt-2">
            At HelloMDs, we envision a healthcare system where providers can focus solely on patient care, free from the complexities of revenue management.
          </p>
          <a href="#" className="mt-4 inline-block text-white underline">
            Read More →
          </a>
        </div>

        {/* Schedule Meeting */}
        <div className="flex-1 bg-[#09243C] p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center space-x-4">
            <div className="bg-[#09A8D4] p-2 rounded-full">
              <span className="text-white  text-xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold">Schedule Meeting</h3>
          </div>
          <p className="mt-2 ">
            Schedule a meeting with us today and take the first step toward achieving your goals!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }