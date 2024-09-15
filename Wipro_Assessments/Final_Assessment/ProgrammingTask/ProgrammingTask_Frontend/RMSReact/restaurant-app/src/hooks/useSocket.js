import { useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = (onUpdate) => {
    useEffect(() => {
        const socket = io('http://localhost:3001');

        socket.on('orderCreated', (order) => onUpdate(order));
        socket.on('orderUpdated', (order) => onUpdate(order));
        socket.on('orderDeleted', (order) => onUpdate(order));

        return () => socket.disconnect();
    }, [onUpdate]);
};

export default useSocket;
