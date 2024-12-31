import React, { useState, useEffect } from 'react';
import {
  Star,
  Heart,
  DollarSign,
  Package,
  MessageSquare,
  Bell,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const NotificationsPage = () => {
     const initialNotifications = [
        {
            id: 1,
           type: 'review',
          icon: <Star className="text-yellow-500" size={20} />,
           title: 'New Review Received',
         message: 'John Doe left you a 5-star review for iPhone 13',
            time: '2 minutes ago',
          read: false,
      },
      {
          id: 2,
        type: 'price',
        icon: <DollarSign className="text-green-500" size={20} />,
        title: 'Price Drop Alert',
          message: 'MacBook Pro M1 price dropped by $200',
            time: '1 hour ago',
            read: false,
        },
      {
         id: 3,
         type: 'sold',
          icon: <Heart className="text-red-500" size={20} />,
        title: 'Favorite Item Sold',
        message: 'The PlayStation 5 from your wishlist has been sold',
           time: '3 hours ago',
          read: true,
     },
     {
        id: 4,
        type: 'listing',
          icon: <Package className="text-blue-500" size={20} />,
           title: 'New Similar Listing',
           message: 'New Nintendo Switch listing matches your search',
            time: '5 hours ago',
          read: true,
     },
     {
          id: 5,
         type: 'message',
           icon: <MessageSquare className="text-teal-500" size={20} />,
            title: 'New Message',
          message: 'Sarah responded to your offer on Camera Lens',
        time: '1 day ago',
       read: true,
   },
    {
       id: 6,
           type: 'listing',
        icon: <Package className="text-blue-500" size={20} />,
          title: 'New Similar Listing',
          message: 'A user similar to your wishlist on "Nintendo Switch OLED"',
          time: '6 hours ago',
        read: false,
     },
       {
        id: 7,
         type: 'review',
           icon: <Star className="text-yellow-500" size={20} />,
           title: 'New Review Received',
           message: 'Alex left you a 5-star review for samsung smart-watch"',
           time: '6 hours ago',
            read: false,
         },
    {
       id: 8,
        type: 'message',
            icon: <MessageSquare className="text-teal-500" size={20} />,
             title: 'New Message',
        message: 'Samuuel sent you message related your sold item "Ipad Pro Gen1 2023"',
           time: '12 hours ago',
          read: true,
        },
     {
        id: 9,
         type: 'price',
          icon: <DollarSign className="text-green-500" size={20} />,
        title: 'Price Drop Alert',
       message: 'iPhone 15 Pro Max 2024 1 TB version price has dropped for 15%',
          time: '13 hours ago',
        read: false,
    },
        {
       id: 10,
      type: 'global', // New  type for Important notifi with extra props such as CTA or something else
           icon: <Bell className="text-teal-600" size={24} />,
            title: 'Update Marketplace App 📢',
         message: 'Check out new improvements, such as the user section UI and improvements ',
          time: 'Yesterday',
          read: false,
             action:{ label:"See Changelog", link: "#"} // This part will implement additional features such as action or CTA for user.

      },
      {
      id: 11,
       type: 'global',
           icon:  <CheckCircle  className="text-green-600" size={24} />,
       title: 'App System Stability Improvements',
     message: 'Your app experience just got better and is working smooth!',
         time: '2 Days Ago',
      read: true,

    }
    ];
  
    const [notifications, setNotifications] = useState(initialNotifications)

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
   };
    
    const markAllUnRead = () => {
          setNotifications(prev => prev.map(notif => ({ ...notif, read: false })));
   };

    
   useEffect(()=>{
      setNotifications((prev) => {
       return prev.map((notif)=>{
         return {...notif ,read: true}
          });
      })

 },[]);


 const hasUnreadNotifications = notifications.some((notification) => !notification.read);

    
    //Filtering between types.
    const normalNotifications = notifications.filter((notif) => notif.type !== 'global')
 const importantNotifications = notifications.filter(notif => notif.type === 'global')



return (
    <motion.div  initial={{ opacity: 0 ,}} animate={{opacity: 1}} className="max-w-4xl mx-auto px-4 py-8  relative" >

    <div className=" flex  justify-between items-center mb-4 "  >

           <motion.h1 initial={{ x: -10}} animate={{ x: 0 }} transition={{duration: 0.2}} className="text-3xl font-bold  text-gray-800  tracking-wider mb-1  " >
            Notifications Center
         </motion.h1>
                
         {hasUnreadNotifications  &&(
       <div className=" flex items-center gap-4">

         <motion.button 
                     whileTap={{ scale: 0.9 }}
                     onClick={markAllAsRead}
                 className="px-4 py-1.5 text-teal-600 border-2 border-teal-600 hover:bg-teal-100 rounded-full font-medium text-sm transition">
                Mark All as Read
            </motion.button>

               <motion.button 
                    whileTap={{ scale: 0.9}}
                    onClick={markAllUnRead}
                className="px-4 py-1.5  text-teal-600 border-2 border-teal-600  hover:bg-teal-100 rounded-full font-medium text-sm transition">
               Mark All as Unread
             </motion.button>
        </div>
        )}

        </div>

         <motion.div initial={{y:15, opacity: 0}}  animate={{y:0, opacity:1}}  className="space-y-6 ">
     
         {importantNotifications.length > 0 && ( // IMPORTANT Notification Block with visual layout and card designs
             <motion.div  className='bg-white  p-6 shadow-md  rounded-lg '>
        
                 {importantNotifications.map((notification,index) => ( // Added Dynamic keys in loops in both the blocks.

                    <motion.div initial={{y:20 ,opacity:0}}  animate={{y:0 ,opacity:1 }}  transition={{ delay: index *0.04 }}  key={notification.id} className='mb-4 last:mb-0'  >
                        
                      <div className={`flex  items-center justify-between gap-4 p-4   relative  rounded-lg ${!notification.read ? ' bg-teal-50 border border-dashed border-teal-500 shadow-sm' : ' border border-transparent' }`}>

                        <div className="p-2 bg-white rounded-full shadow-sm flex items-center justify-center ">
                         {notification.icon}
                       </div>
                                
                   <div className="flex-1">
                      <h3 className="font-medium text-gray-800 mb-1">
                     {notification.title}
                  </h3>
                            <p className="text-gray-600 text-sm  mb-1 "> {notification.message}</p>
                            <p className='text-gray-400 text-xs '>{notification.time}</p>
                    </div>
                  
                    
                 { !notification.read && (<span className=" absolute  w-2 h-2  bg-teal-600  rounded-full  top-4 right-5 "></span>)
                }
                        {notification?.action &&(
                                <motion.a href={notification.action.link}
                                     whileHover={{scale:1.05}}
                                className=" font-medium px-4  py-1 text-teal-600 transition   border-teal-600 border-2 rounded-full shadow hover:bg-teal-100 ">
                                    {notification.action.label}
                              </motion.a>

                            )}
              </div>

                  </motion.div>
                 ))}
              </motion.div>
         )}

       
          {normalNotifications.length > 0 &&( //Normal list Notification Card with designs also in their mapping
                <motion.div
              className='bg-white shadow-md rounded-lg  '>
             
                   {normalNotifications.map((notification,index) => (
                            <motion.div  initial={{y:15, opacity: 0}}  animate={{y:0 , opacity:1}} transition={{ delay: index* 0.03 }} key={notification.id}  >
                            
                                 <div className={`flex  items-start justify-start  p-5  relative  transition-colors hover:bg-gray-50 last:border-none   rounded-t-lg  last:rounded-b-lg    ${ !notification.read ? ' border border-l-0 border-r-0 border-t  border-dashed border-gray-200' : '' }  `} >
                      <div  className='p-2.5   bg-gray-100 shadow rounded-full '>
                        {notification.icon}
                     </div>
                          <div className='flex-1 pl-4'>
                                 <h3 className=" font-medium text-gray-700"> {notification.title} </h3>
                           <p className="text-gray-500 text-sm">{notification.message}</p>
                         <div className="text-gray-400 text-sm pt-1.5">
                                  {notification.time}
                                 </div>
                                   </div>
                        
                                { !notification.read &&
                                      <span  className="w-2 h-2 absolute bg-teal-600 right-5 top-1/2 -translate-y-1/2 rounded-full " />

                                }

                     </div>
                             </motion.div>
                  ))}
                
                 </motion.div>
            )}

    </motion.div>
    </motion.div>

  );
};

export default NotificationsPage;