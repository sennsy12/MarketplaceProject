import { useState } from 'react';
import { Send, Search, MoreVertical, Phone, Video, User } from 'lucide-react';

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  const chats = [
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Is this still available?',
      time: '2 min ago',
      unread: 2,
      avatar: null,
      messages: [
        { id: 1, text: "Hi, I'm interested in your iPhone", sender: 'them', time: '10:00' },
        { id: 2, text: 'Is it still available?', sender: 'them', time: '10:01' },
        { id: 3, text: 'Yes, it is!', sender: 'me', time: '10:05' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      lastMessage: 'Great, see you tomorrow!',
      time: '1 hour ago',
      unread: 0,
      avatar: null,
      messages: [],
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    // Add message handling logic here
    setMessageInput('');
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-64px)] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <div className="flex h-full">
        {/* Chat List */}
        <div className="w-1/3 bg-white border-r shadow-inner">
          <div className="p-4 border-b bg-gray-50">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-12 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100"
              />
              <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100%-73px)]">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`p-4 flex items-center gap-3 border-b cursor-pointer transition rounded-md m-2
                  ${selectedChat?.id === chat.id ? 'bg-teal-50' : 'hover:bg-gray-50'}`}
              >
                {chat.avatar ? (
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full border"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow">
                    <User size={24} className="text-gray-500" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-700">{chat.name}</h3>
                    <span className="text-sm text-gray-500">{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className="bg-teal-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b flex justify-between items-center bg-white shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                    <User size={20} className="text-gray-500" />
                  </div>
                  <h2 className="font-semibold text-gray-700">{selectedChat.name}</h2>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-gray-500 hover:text-teal-600">
                    <Phone size={20} />
                  </button>
                  <button className="text-gray-500 hover:text-teal-600">
                    <Video size={20} />
                  </button>
                  <button className="text-gray-500 hover:text-teal-600">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedChat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-xl px-4 py-2 shadow-md text-sm
                        ${
                          message.sender === 'me'
                            ? 'bg-teal-500 text-white'
                            : 'bg-white text-gray-700'
                        }`}
                    >
                      <p>{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block text-right">
                        {message.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t bg-white shadow-inner">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="bg-teal-500 text-white p-3 rounded-full hover:bg-teal-600 shadow-md"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500 text-lg">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
