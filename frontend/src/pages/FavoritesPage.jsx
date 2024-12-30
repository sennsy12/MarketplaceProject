import React, { useState } from 'react';
import { Heart, MapPin, Folder, Plus, MoreVertical, X, Check } from 'lucide-react';

const FavoritesPage = () => {
  const [folders, setFolders] = useState([
    { id: 1, name: 'All Items', default: true },
    { id: 2, name: 'Electronics', default: false },
    { id: 3, name: 'Cars', default: false }
  ]);
  const [selectedFolder, setSelectedFolder] = useState(1);
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
    const [editFolderName, setEditFolderName] = useState({ id: null, value: '' });

  const [favorites, setFavorites] = useState([
      {
          id: 1,
          title: "iPhone 13 Pro",
          price: "8999 kr",
          location: "Oslo",
          image: "/iphone-image.jpg",
          date: "2 days ago",
          folderId: 2
      },
      {
          id: 2,
          title: "MacBook Pro M1",
          price: "12999 kr",
          location: "Bergen",
          image: "/macbook-image.jpg",
          date: "1 week ago",
          folderId: 2
      }
  ]);


    const handleEditFolderNameChange = (e, id) => {
       setEditFolderName(prev => ({
             ...prev,
              value: e.target.value,
             id: id
          }))
   }

     const saveEditFolderName = () => {
         if (editFolderName.value.trim()) {
              setFolders(folders.map(folder => {
                 if(folder.id === editFolderName.id) {
                  return {...folder, name: editFolderName.value }
                 }
              return folder
               }));
           }
           setEditFolderName({id:null, value:''})

   };


     const handleEnterSaveFolderName = (e) =>{
            if(e.key === 'Enter' ) {
                saveEditFolderName()
            }
    }
    const removeFolder = (folderId) => {
        if(folders.filter(folder=> folder.default).length !==1 && !folders.find(folder => folder.id === folderId).default){
            setFolders(folders.filter(folder => folder.id !== folderId));
              // reset to general filter if deleted
             setSelectedFolder(1)
        }
   };


  const createNewFolder = (e) => {
    e.preventDefault();
    if (newFolderName.trim()) {
      setFolders([...folders, {
        id: folders.length + 1,
        name: newFolderName,
        default: false
      }]);
      setNewFolderName('');
      setShowNewFolder(false);
    }
  };


  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

    const toggleSelect = (id) =>{
        setSelectedFolder(id)
    }
    

  const filteredFavorites = selectedFolder === 1
    ? favorites
    : favorites.filter(item => item.folderId === selectedFolder);

  return (
      <div className="min-h-screen bg-white-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-800">My Favorites</h1>
                  <button
                      onClick={() => setShowNewFolder(true)}
                      className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 rounded-md px-4 py-2 text-sm font-medium  hover:bg-teal-100  transition-colors">
                      <Plus size={18}/>
                    <span> New Folder</span>
                 </button>
              </div>
              {/* Folder Nav */}
                <div className="relative flex  overflow-x-auto   pb-4 -mx-4 sm:mx-0 ">
                  <div className="flex space-x-3 sm:space-x-4 px-4  sm:px-0">
                    {folders.map((folder, i) => (
                            <button
                            key={folder.id}
                              onClick={()=>toggleSelect(folder.id)}
                              className={`
                               flex  items-center gap-2 py-2 px-4 rounded-full  whitespace-nowrap text-sm  font-medium
                            ${selectedFolder === folder.id ? 'bg-teal-500 text-white hover:bg-teal-600' : 'bg-gray-200 text-gray-600  hover:bg-gray-300' }
                           transition-colors focus:outline-none `}>
                            <Folder size={16}/>
                          <span>
                                { editFolderName.id === folder.id  ?  (
                                     <input
                                         value={editFolderName.value}
                                        onChange={(e)=>handleEditFolderNameChange(e,folder.id)}
                                        onBlur={() => saveEditFolderName()}
                                          onKeyDown={handleEnterSaveFolderName}
                                          autoFocus={true}
                                            className=' focus:outline-none  w-24  border-b  border-gray-400' />
                                )
                            : folder.name}
                            </span>
                        {!folder.default  ?
                           <>
                             <span className="flex-1 ">
                             </span>

                                <button className="rounded-full px-1.5 hover:bg-gray-300 transition-colors duration-100"
                                      onClick={(e) =>{
                                        e.stopPropagation();
                                         if( editFolderName.id === folder.id ){
                                                saveEditFolderName();
                                         } else {
                                             setEditFolderName(prev=>({...prev, value: folder.name, id: folder.id}))
                                         }
                                     }}
                                       >

                                    { editFolderName.id !== folder.id && (<MoreVertical size={16} className="text-gray-500"/> ) }
                                    { editFolderName.id === folder.id && <Check size={16} className="text-gray-600"/>}
                                  </button>
                            <button className=" rounded-full px-1.5  hover:bg-gray-300 transition-colors duration-100 "
                               onClick={(e) => {
                                e.stopPropagation();
                                  removeFolder(folder.id);
                               }}

                              >
                              <X size={16} className='text-gray-500'/>
                            </button>
                            </> : ''}


                             {!folder.default &&
                             (<span className="ml-1.5 text-sm   ">
                              ({favorites.filter(item => item.folderId === folder.id).length})
                            </span>)}
                      </button>

                        ))}
                   </div>
              </div>

              {/* Modal new folder */}
              {showNewFolder && (
                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                     <div className="bg-white rounded-lg p-6 w-full  sm:w-96">
                      <h2 className="text-xl font-bold mb-4">Create New Folder</h2>
                    <form onSubmit={createNewFolder} >
                           <input
                            type="text"
                            value={newFolderName}
                            onChange={(e) => setNewFolderName(e.target.value)}
                               placeholder="Folder name"
                             autoFocus={true}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"/>
                        <div className="flex justify-end gap-2">
                            <button type="button" onClick={()=>setShowNewFolder(false)} className="px-4 py-2 text-gray-600  hover:bg-gray-100 rounded-md transition-colors"> Cancel </button>
                           <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-md  hover:bg-teal-600 transition-colors"  > Create </button>
                        </div>
                      </form>
                    </div>
              </div>
              )}

          {filteredFavorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFavorites.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group transform transition-all hover:shadow-lg ">
                     <div className="relative overflow-hidden rounded-t-lg">
                            <img
                              src={item.image}
                                alt={item.title}
                                className="w-full h-60 object-cover group-hover:scale-105 transform transition-transform  duration-300" />

                                <div className="absolute top-3 right-3 flex gap-2">
                                     <button
                                    onClick={() => removeFromFavorites(item.id)}
                                      className="p-1.5  rounded-full bg-white shadow-md text-red-500 hover:bg-red-100 transition-colors"
                                      > <Heart size={18} fill="currentColor"/> </button>
                                 <button className="p-1.5  rounded-full bg-white shadow-md text-gray-600 hover:bg-gray-100 transition-colors ">
                                       <MoreVertical size={18}/> </button>
                                 </div>
                           </div>
                      <div className="px-4 py-3">
                          <h3 className="text-lg font-semibold  text-gray-800 group-hover:text-teal-600 transition-colors  ">
                            {item.title}</h3>
                         <p className="font-semibold text-teal-500 mt-1">{item.price}</p>
                         <div className="flex justify-between text-gray-500 text-sm mt-2">
                               <div className='flex gap-1 items-center'>
                                 <MapPin size={16}/>
                                  <span>{item.location}</span>
                             </div>
                          <span>{item.date}</span>
                       </div>
                     </div>
                  </div>
                ))}
            </div>
             ) : (
               <div className="text-center py-16 ">
                 <Heart size={48} className="mx-auto text-gray-400 mb-4"/>
                  <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
                  <p className="text-gray-500">Save some to view it in here </p>
             </div>
           )}
       </div>
    </div>
  );
};

export default FavoritesPage;