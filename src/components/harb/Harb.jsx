import React from 'react';
import { ref, set } from "firebase/database";
import { database } from './firebase_harb';
import Nav from '../../Nav';

const Harb = () => {
  const [formData, setFormData] = React.useState({
    companyName: '',
    brandName: '',
    registrationNumber: '',
    headOfficeAddress: '',
    phoneNumber: '',
    emailAddress: '',
    website: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const writeUserData = async (e) => {
    e.preventDefault();
    
    try {
      const userId = generateUniqueId();
      const dbRef = ref(database, `users/${userId}`);
      
      await set(dbRef, {
        ...formData,
        timestamp: Date.now()
      });
      
      alert('Data saved successfully!');
      // Reset form after successful submission
      setFormData({
        companyName: '',
        brandName: '',
        registrationNumber: '',
        headOfficeAddress: '',
        phoneNumber: '',
        emailAddress: '',
        website: ''
      });
    } catch (error) {
      console.error("Error saving data: ", error);
      alert(`Error saving data: ${error.message}`);
    }
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  return (
    <div className='bg-[#C0F2CB] h-screen overflow-hidden font-lato'>
      <Nav />
      <div className='flex flex-col h-[calc(96vh-76px)] p-4'>
        <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-left">
              Fill Out Your Company Details
            </h2>
            <p className="text-gray-600 opacity-72 text-left">
              Provide your company's essential details to streamline verification and connect with potential partners in the industry
            </p>
          </div>

          <div className="px-6 overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <form onSubmit={writeUserData} className="space-y-4 pb-2">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-left">
                  Company Name:
                </label>
                <div className="border-b border-gray-300 opacity-50">
                  <input 
                    type="text"
                    name="companyName"
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="Medical_com"
                    onChange={handleChange}
                    value={formData.companyName}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-left"> 
                  Brand Name (if different):
                </label>
                <div className="border-b border-gray-300 opacity-50">
                  <input 
                    type="text"
                    name="brandName"
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="medical"
                    onChange={handleChange}
                    value={formData.brandName}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-left">
                  Registration Number:
                </label>
                <div className="border-b border-gray-300 opacity-50">
                  <input 
                    type="text"
                    name="registrationNumber"
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="1234 5647 6486"
                    onChange={handleChange}
                    value={formData.registrationNumber}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-left">
                  Head Office Address:
                </label>
                <div className="border-b border-gray-300 opacity-50">
                  <input 
                    type="text"
                    name="headOfficeAddress"
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="16/B XYZ,City-PINCode"
                    onChange={handleChange}
                    value={formData.headOfficeAddress}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-left">
                  Phone Number:
                </label>
                <div className="border-b border-gray-300 opacity-50">
                  <input 
                    type="tel"
                    name="phoneNumber"
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="1234567891"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-left">
                  Email Address:
                </label>
                <div className="border-b border-gray-300 opacity-50">
                  <input 
                    type="email"
                    name="emailAddress"
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="email@gmail.com"
                    onChange={handleChange}
                    value={formData.emailAddress}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-left">
                  Website (if any):
                </label>
                <div className="border-b border-gray-300">
                  <input 
                    type="url"
                    name="website"
                    className="w-full bg-transparent focus:outline-none"
                    placeholder="medical.com"
                    onChange={handleChange}
                    value={formData.website}
                  />
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  type="submit"
                  className="w-[24%] bg-[#082B13] text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-200 mt-6 mx-auto block">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harb;