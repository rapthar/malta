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
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
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
    <div className="flex-1 flex flex-col bg-white dark:bg-dark-800">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-dark-700">
        <div className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200 cursor-pointer" />
          <Video className="hidden sm:block w-5 h-5 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200 cursor-pointer" />
        </div>
        <span className="flex items-center font-medium text-gray-900 dark:text-dark-200">
          <span className="text-xl mr-2">🏆</span>
          Zeeker Project
        </span>
        <Grid className="w-5 h-5 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200 cursor-pointer" />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className="flex space-x-4">
            <img
              src={message.user.avatar}
              alt={message.user.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                <span className="font-medium dark:text-dark-200">{message.user.name}</span>
                <span className="text-gray-500 dark:text-dark-400">{message.user.role}</span>
                <span className="text-gray-400 dark:text-dark-500">{message.timestamp}</span>
              </div>
              
              {message.content && (
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-dark-300">{message.content}</p>
              )}
              
              {message.attachments?.map((attachment) => (
                <div key={attachment.name} className="mt-2 bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium dark:text-dark-200">{attachment.name}</span>
                    <span className="text-sm text-gray-500 dark:text-dark-400">{attachment.size}</span>
                  </div>
                  {attachment.progress !== undefined && (
                    <div className="mt-2 h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${attachment.progress}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
              
              {message.images && (
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {message.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Attachment ${index + 1}`}
                      className="rounded-lg w-full h-32 sm:h-48 object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        <div className="flex justify-center">
          <span className="px-3 py-1 text-sm text-gray-500 dark:text-dark-400 bg-gray-100 dark:bg-dark-700 rounded-full">Today</span>
        </div>
      </div>
      
      <div className="border-t border-gray-200 dark:border-dark-700 p-4 bg-white dark:bg-dark-800">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button className="p-2 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200">
            <Paperclip className="w-5 h-5" />
          </button>
          <button className="hidden sm:block p-2 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200">
            <Smile className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border-0 focus:ring-0 px-2 sm:px-4 py-2 bg-transparent text-sm sm:text-base text-gray-900 dark:text-dark-200 placeholder-gray-500 dark:placeholder-dark-400"
          />
          <button className="p-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}