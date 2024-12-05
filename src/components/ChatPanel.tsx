import React from 'react';
import { Phone, Video, Grid, Paperclip, Smile, Send, Flag, MoreHorizontal } from 'lucide-react';

interface Message {
  id: string;
  user: {
    name: string;
    role: string;
    avatar: string;
  };
  content?: string;
  timestamp: string;
  attachments?: {
    name: string;
    size: string;
    progress?: number;
  }[];
  images?: string[];
}

const messages: Message[] = [
  {
    id: '1',
    user: {
      name: 'Sarah Miller',
      role: 'Web Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    timestamp: '12:45 PM',
    attachments: [{
      name: 'New Product Design Guidelines.pdf',
      size: '760.90 KB',
      progress: 65
    }]
  },
  {
    id: '2',
    user: {
      name: 'Edward Goodwin',
      role: 'Web Designer',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    timestamp: '12:45 PM',
    images: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '3',
    user: {
      name: 'Kyle Peters',
      role: 'Web Designer',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    content: 'When you starting a company you are thinking on how to cut expenses. One of such options to cut the startup costs is a company logo design. But is it good idea to order a cheap logo or work without company logo at all?',
    timestamp: '12:45 PM'
  },
  {
    id: '4',
    user: {
      name: 'Susan Lane',
      role: 'Web Designer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    content: 'When you starting a company you are thinking on how to cut expenses. One of such options to cut the startup costs is a company logo design.',
    timestamp: '12:45 PM'
  }
];

export function ChatPanel() {
  return (
    <div className="h-screen flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <Phone className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          <Video className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl">🏆</span>
          <span className="font-medium text-gray-900">Zeeker Project</span>
        </div>
        <Grid className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        <div className="p-4 pb-8 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="group flex space-x-3">
              <img
                src={message.user.avatar}
                alt={message.user.name}
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">{message.user.name}</span>
                  <span className="text-gray-500">{message.user.role}</span>
                  <span className="text-gray-400">{message.timestamp}</span>
                </div>
                
                {message.content && (
                  <p className="mt-1 text-gray-600">{message.content}</p>
                )}

                {message.attachments && (
                  <div className="mt-2 bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{message.attachments[0].name}</span>
                        <span className="text-gray-500">{message.attachments[0].size}</span>
                      </div>
                    </div>
                    <div className="mt-2 relative">
                      <div className="h-1 bg-gray-200 rounded">
                        <div 
                          className="h-1 bg-blue-500 rounded" 
                          style={{ width: `${message.attachments[0].progress}%` }}
                        />
                      </div>
                      <span className="absolute right-0 -top-6 text-gray-500">
                        {message.attachments[0].progress}%
                      </span>
                    </div>
                  </div>
                )}

                {message.images && (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {message.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Attachment ${index + 1}`}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    ))}
                  </div>
                )}

                <div className="mt-2 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-gray-400 hover:text-red-500">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  <Flag className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  <MoreHorizontal className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="px-4 py-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-gray-600">
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Type Message"
            className="flex-1 bg-transparent focus:outline-none"
          />
          <button className="text-gray-400 hover:text-gray-600">
            <Smile className="w-5 h-5" />
          </button>
          <button className="text-blue-500 hover:text-blue-600">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}