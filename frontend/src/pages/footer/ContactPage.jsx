const ContactUs = () => {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Have questions or need assistance? We're here to help! Fill out the form below or reach out through our other channels.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>📧 Email: support@marketplace.com</p>
              <p>📞 Phone: (555) 123-4567</p>
              <p>🕒 Hours: Monday - Friday, 9am - 5pm EST</p>
            </div>
          </div>
  
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Account Issues</option>
                <option>Report a Problem</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none h-32"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  