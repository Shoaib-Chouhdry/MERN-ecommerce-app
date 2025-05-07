export default function ServicesSection() {
    const services = [
      {
        icon: "🖥️",
        title: "Prior Authorization Services",
        description: "Efficient prior authorization resolutions to avoid costly claim denials.",
      },
      {
        icon: "🏢",
        title: "Billing Services",
        description: "An efficient and translucent billing solution. Let you generate more revenue through loftier claim acceptance and rapid reimbursements.",
      },
      {
        icon: "💰",
        title: "Payment Posting",
        description: "Payment posting is a crucial step in managing your revenue cycle. It provides insights into reimbursement trends and helps with analytics.",
      },
      {
        icon: "🔄",
        title: "Denial Management Services",
        description: "From identifying denials to resubmitting claims, our denial specialists cover it all for you.",
      },
      {
        icon: "📑",
        title: "Account Receivable Services",
        description: "Increase your cash flow with our secure, swift, and easily integrated Account Receivable Services.",
      },
      {
        icon: "📝",
        title: "Credentialing And Enrollment",
        description: "Utilizing technology to develop a vigilant, efficient, and integrated approach to credentialing and enrollment services.",
      },
    ];
  
    return (
      <section className="py-16 px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col p-6 border rounded-xl shadow-sm bg-white w-full sm:w-[48%] lg:w-[30%] hover:shadow-lg transition-shadow">
              <div className="text-3xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-[#04223C] mt-4">{service.title}</h3>
              <hr className="w-12 border-t-2 border-gray-300 my-2" />
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  