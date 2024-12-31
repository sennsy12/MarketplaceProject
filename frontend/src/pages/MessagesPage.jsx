import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Search, Image, Paperclip,UserX, Flag, Trash2, Trash, MoreVertical, File } from 'lucide-react';
import { listings } from '../data/mockData';

const MessagesPage = () => {
  const location = useLocation();
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [chats, setChats] = useState([]);
  const messagesEndRef = useRef(null);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [showUploadOptions, setShowUploadOptions] = useState(false);



  useEffect(() => {
    if (location.state) {
      const { productId } = location.state;
      const listingData = listings.find(listing => listing.id === parseInt(productId));
      
      const existingChat = chats.find(chat => 
        chat.productId === productId && chat.sellerId === listingData.seller.id
      );

      if (existingChat) {
        setSelectedChat(existingChat);
      } else {
        const newChat = {
          id: Date.now(),
          productId,
          sellerId: listingData.seller.id,
          name: listingData.seller.name,
          lastMessage: `Inquiry about: ${listingData.title}`,
          time: 'Just now',
          unread: 0,
          messages: [],
          productInfo: {
            title: listingData.title,
            image: listingData.image,
            price: `${listingData.price} ${listingData.currency}`
          }
        };
        setChats(prev => [...prev, newChat]);
        setSelectedChat(newChat);
      }
    }
  }, [location.state]);

  useEffect(() => {
  }, [selectedChat?.messages]);

  const sendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      text: messageInput,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setChats(prevChats => 
      prevChats.map(chat => 
        chat.id === selectedChat.id 
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
              lastMessage: messageInput,
              time: 'Just now'
            }
          : chat
      )
    );

    setMessageInput('');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const message = {
        id: Date.now(),
        type: 'image',
        content: URL.createObjectURL(file),
        sender: 'user',
        timestamp: new Date().toISOString()
      };
      setChats(prevChats => 
        prevChats.map(chat => 
          chat.id === selectedChat.id 
            ? {
                ...chat,
                messages: [...chat.messages, message],
                lastMessage: 'Sent an image',
                time: 'Just now'
              }
            : chat
        )
      );
    }
  };
  
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const message = {
        id: Date.now(),
        type: 'file',
        content: file.name,
        sender: 'user',
        timestamp: new Date().toISOString()
      };
      setChats(prevChats => 
        prevChats.map(chat => 
          chat.id === selectedChat.id 
            ? {
                ...chat,
                messages: [...chat.messages, message],
                lastMessage: `Sent a file: ${file.name}`,
                time: 'Just now'
              }
            : chat
        )
      );
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-12 h-[800px]">
          {/* Chat List */}
          <div className="col-span-4 border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div className="overflow-y-auto h-[calc(100%-73px)]">
              {chats.map(chat => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedChat?.id === chat.id ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={chat.productInfo?.image} 
                        alt={chat.productInfo?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{chat.name}</h3>
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                    </div>
                    <div className="text-xs text-gray-400">{chat.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="col-span-8 flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={selectedChat.productInfo?.image}
                        alt={selectedChat.productInfo?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold">{selectedChat.name}</h2>
                      <p className="text-sm text-gray-500">{selectedChat.productInfo?.title}</p>
                    </div>
                  </div>
                  <div className="relative">
  <button 
    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
    onClick={() => setShowOptionsMenu(!showOptionsMenu)}
  >
    <MoreVertical size={20} />
  </button>
  
  {showOptionsMenu && (
    <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
      <button 
        className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700 flex items-center gap-2"
        onClick={() => {
          // Handle block user
          setShowOptionsMenu(false);
        }}
      >
        <UserX size={16} />
        Block User
      </button>
      
      <button 
        className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700 flex items-center gap-2"
        onClick={() => {
          // Handle report
          setShowOptionsMenu(false);
        }}
      >
        <Flag size={16} />
        Report User
      </button>
      
      <button 
        className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700 flex items-center gap-2"
        onClick={() => {
          // Handle clear chat
          setShowOptionsMenu(false);
        }}
      >
        <Trash2 size={16} />
        Clear Chat
      </button>
      
      <button 
        className="w-full px-4 py-2 text-left hover:bg-gray-50 text-red-600 flex items-center gap-2"
        onClick={() => {
          // Handle delete chat
          setShowOptionsMenu(false);
        }}
      >
        <Trash size={16} />
        Delete Conversation
      </button>
    </div>
  )}
</div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Product Info Message */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-50 rounded-lg p-4 max-w-sm">
                      <img 
                        src={selectedChat.productInfo?.image}
                        alt={selectedChat.productInfo?.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="font-semibold">{selectedChat.productInfo?.title}</h3>
                      <p className="text-teal-600 font-bold">{selectedChat.productInfo?.price}</p>
                    </div>
                  </div>

                  {selectedChat.messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
<div className="p-4 border-t">
  <div className="flex items-center gap-2">
    {/* Combined upload button with dropdown */}
    <div className="relative">
      <button
        onClick={() => setShowUploadOptions(!showUploadOptions)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <Paperclip size={20} className="text-gray-500" />
      </button>
      
      {/* Upload options dropdown */}
      {showUploadOptions && (
        <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg border py-2 w-40">
          <button
            onClick={() => {
              document.getElementById('imageUpload').click();
              setShowUploadOptions(false);
            }}
            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
          >
            <Image size={16} className="text-gray-500" />
            <span className="text-sm">Upload Image</span>
          </button>
          <button
            onClick={() => {
              document.getElementById('fileUpload').click();
              setShowUploadOptions(false);
            }}
            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
          >
            <File size={16} className="text-gray-500" />
            <span className="text-sm">Upload File</span>
          </button>
        </div>
      )}
      
      {/* Hidden file inputs */}
      <input
        type="file"
        id="imageUpload"
        hidden
        accept="image/*"
        onChange={(e) => handleImageUpload(e)}
      />
      <input
        type="file"
        id="fileUpload"
        hidden
        onChange={(e) => handleFileUpload(e)}
      />
    </div>

    {/* Message input with mobile-friendly styles */}
    <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent overflow */}
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type a message..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>

    <button
      onClick={sendMessage}
      disabled={!messageInput.trim()}
      className={`p-2 rounded-full transition-colors flex-shrink-0 ${
        messageInput.trim()
          ? 'bg-teal-600 text-white hover:bg-teal-700'
          : 'bg-gray-100 text-gray-400'
      }`}
    >
      <Send size={20} />
    </button>
  </div>
</div>
</>
) : (
<div className="flex-1 flex items-center justify-center text-gray-500">
  Select a chat to start messaging
</div>
)}
</div>
</div>
</div>
</div>

  );
};

export default MessagesPage;
