import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';


const UseData = () => {
    const { data: jsonData = [], refetch } = useQuery({
        queryKey: ['jsonData'],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // console.log(response, 'line 11');
            return response.data

        }
    })

    return [jsonData, refetch]
};

export default UseData;