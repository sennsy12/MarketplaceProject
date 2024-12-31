import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MailIcon, Key } from 'lucide-react';


const LoginPage = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const validEmail = "user@example.com";
       const validPassword = "password123";


        const email = e.target.email.value;
       const password = e.target.password.value;
   
        if (email === validEmail && password === validPassword) {
           localStorage.setItem('user', JSON.stringify({ email, name: "John Doe" }));
             navigate('/');
           window.location.reload();
           } else {
            setError('Invalid credentials. Please use user@example.com / password123');
        }
   };
  
   return (
        <div className="bg-gray-50 py-16 relative">
               
      <div className="max-w-2xl mx-auto px-4 mt-8 md:mt-10 ">
            <motion.div
               initial={{opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1 , y: 0}}
                 transition={{duration:0.2}}
                className="bg-white rounded-lg shadow-2xl p-8 relative z-10 ">
                  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 relative">
                     <span className='relative'>
                        Login to Your Account
                          </span>
                          <span className="w-10 h-1 rounded-full bg-teal-500 absolute bottom-0 left-1/2 -translate-x-1/2  -mb-1 "/>

                         </h2>
                    {error && <motion.p
                          initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y:0 }}
                   exit={{opacity:0 , y: -10 }}
                                 transition={{duration:0.2}}

                           className="text-red-600 text-sm mb-4 text-center bg-red-100 p-3 rounded-lg">
                          {error}
                     </motion.p>}

                    <form onSubmit={handleLogin} className="space-y-5" >
                        <div>
                            <label htmlFor="email" className="text-gray-600 text-sm font-medium block mb-2 flex items-center gap-2">
                            <MailIcon size={16} className='text-gray-500'/>   Email
                            </label>
                            <div className='relative rounded-md shadow-sm border focus-within:border-teal-500 transition-shadow duration-300  '>
                              <input type="email"
                            id="email"
                            name="email"
                                   className="w-full py-2.5 rounded-md border-none  px-3 text-gray-700 outline-none  bg-transparent "
                             defaultValue="user@example.com" />
                                 </div>
                            </div>

                     <div>
                             <label htmlFor="password" className="text-gray-600 text-sm font-medium block mb-2 flex items-center gap-2">
                         <Key size={16} className='text-gray-500'/>    Password
                           </label>
                          <div className='relative rounded-md shadow-sm border focus-within:border-teal-500 transition-shadow duration-300 '>
                        <input type="password"
                           id="password"
                           name="password"
                           className="w-full py-2.5 px-3 text-gray-700 rounded-md outline-none bg-transparent border-none "
                            defaultValue="password123"  />

                             </div>

                            </div>

                           <div>
                            <button
                              type="submit"
                                 className="w-full py-3 rounded-md  text-white bg-teal-600 hover:bg-teal-700 transition-colors text-lg font-medium flex justify-center gap-2  shadow-md focus:outline-none focus:shadow-xl "
                              >
                                    Login
                              </button>
                        </div>
                      </form>
                </motion.div>
            </div>

         
   
       </div>
  );
};
export default LoginPage;