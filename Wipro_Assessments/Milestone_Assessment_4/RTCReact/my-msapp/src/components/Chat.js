// // Chat.js
// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import axios from 'axios'; // Axios import for API requests
// import { useNavigate } from 'react-router-dom';
// import '../styles/Chat.css';

// const socket = io();

// const Chat = () => {
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState('');
//     const [username, setUsername] = useState(localStorage.getItem('username') || '');
//     const [room, setRoom] = useState('');
//     const [joined, setJoined] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (joined) {
//             socket.emit('joinRoom', { username, room });
//             socket.on('receiveMessage', (newMessage) => {
//                 setMessages((prevMessages) => [...prevMessages, newMessage]);
//             });

//             return () => {
//                 socket.off('receiveMessage');
//             };
//         }
//     }, [joined, username, room]);

//     const handleJoinRoom = async () => {
//         if (username.trim() === '' || room.trim() === '') {
//             alert('Please enter both username and room name.');
//             return;
//         }

//         try {
//             const token = localStorage.getItem('token'); 
//             if (!token) {
//                 alert('User not authenticated, please login again.');
//                 navigate('/login');
//                 return;
//             }

//             await axios.post('http://localhost:5000/api/messages', {
//                 username, room
//             }, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });

//             setJoined(true);
//         } catch (error) {
//             console.error('Error saving room info:', error);
//             if (error.response && error.response.status === 401) {
//                 alert('Unauthorized: Please log in again.');
//                 navigate('/login');
//             }
//         }
//     };

//     const handleSendMessage = () => {
//         if (message.trim() === '' || !joined) return;

//         const newMessage = { username, room, message };
//         socket.emit('sendMessage', newMessage);
//         setMessages((prevMessages) => [...prevMessages, newMessage]);
//         setMessage('');
//     };

//     return (
//         <div className="Chat">
//             {!joined ? (
//                 <div className="join-room">
//                     <h2>Join a Room</h2>
//                     <div className="inputs">
//                         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your name" />
//                         <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} placeholder="Room Name" />
//                     </div>
//                     <button onClick={handleJoinRoom}>Join Room</button>
//                 </div>
//             ) : (
//                 <div className="chat-room">
//                     <h2>Welcome to the room, {username}!</h2>
//                     <div className="messages">
//                         {messages.map((msg, index) => (
//                             <div key={index} className="message">
//                                 <strong>{msg.username}:</strong> {msg.message}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="input">
//                         <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." />
//                         <button onClick={handleSendMessage}>Send</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Chat;
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Chat.css';

const socket = io();

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [joined, setJoined] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (joined) {
            socket.emit('joinRoom', { username, room });

            socket.on('receiveMessage', (newMessage) => {
                setMessages((prevMessages) => [...prevMessages, newMessage]);
            });

            return () => {
                socket.off('receiveMessage');
            };
        }
    }, [joined, username, room]);

    const handleJoinRoom = async () => {
        if (!username || !room) {
            alert('Please enter both username and room name.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/messages/join', { username, room });
            console.log(response.data);
            setJoined(true);
        } catch (error) {
            console.error('Error saving room info:', error);
        }
    };

    const handleSendMessage = () => {
        if (message.trim() === '' || !joined) return;

        const newMessage = { username, room, message };
        socket.emit('sendMessage', newMessage);

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage('');
    };

    return (
        <div className="Chat">
            {!joined ? (
                <div className="join-room">
                    <h2>Join a Room</h2>
                    <div className="inputs">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your name"
                        />
                        <input
                            type="text"
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                            placeholder="Room Name"
                        />
                    </div>
                    <button onClick={handleJoinRoom}>Join Room</button>
                </div>
            ) : (
                <div className="chat-room">
                    <h2>Welcome to the room, {username}!</h2>
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="message">
                                <strong>{msg.username}:</strong> {msg.message}
                            </div>
                        ))}
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
