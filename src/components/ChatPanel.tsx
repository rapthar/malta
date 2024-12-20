import React from 'react';
import { Paperclip, Smile, Send, Heart, Flag, MoreHorizontal } from 'lucide-react';
import { ScrollContainer } from './ScrollContainer';

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
      <ScrollContainer>
        <div className="p-4 pb-8 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="flex space-x-4">
            <img
              src={message.user.avatar}
              alt={message.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <span className="font-medium dark:text-dark-200">{message.user.name}</span>
                <span className="text-gray-500 dark:text-dark-400">{message.user.role}</span>
                <span className="text-gray-400 dark:text-dark-500">{message.timestamp}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-pink-500">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Flag className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {message.content && (
                <p className="mt-2 text-gray-600 dark:text-dark-300">{message.content}</p>
              )}
              
              {message.attachments?.map((attachment) => (
                <div key={attachment.name} className="mt-2 bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-indigo-600">{attachment.name}</span>
                      <span className="text-sm text-gray-500">{attachment.size}</span>
                    </div>
                  </div>
                  {attachment.progress !== undefined && (
                    <div className="mt-2 h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${attachment.progress}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
              
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
            </div>
            </div>
          ))}
          
          <div className="flex justify-center">
            <span className="px-3 py-1 text-sm text-gray-500 dark:text-dark-400 bg-gray-100 dark:bg-dark-700 rounded-full">Today</span>
          </div>
        </div>
      </ScrollContainer>
      
      <div className="border-t border-gray-200 dark:border-dark-700 p-4 bg-white dark:bg-dark-800">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200">
            <Paperclip className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 dark:text-dark-400 hover:text-gray-600 dark:hover:text-dark-200">
            <Smile className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border-0 focus:ring-0 px-4 py-2 bg-transparent text-gray-900 dark:text-dark-200 placeholder-gray-500 dark:placeholder-dark-400"
          />
          <button className="p-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}