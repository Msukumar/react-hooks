import React , { useEffect , useReducer } from 'react'
import axios from 'axios';

const initailState = {
    post: {},
    error: '',
    loading: false
};


const reducer = (state, action)=>{

    switch(action.type){
        case 'success': 
        return {
            post: action.post,
            error: '',
            loading:false
        }
        case 'error': return {
            error:'Something went wrong'
        }

        default : return state;
    }
}

function DataFetching() {

    const [state, dispatch ] = useReducer(reducer, initailState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({ type: 'success' , post: res.data})
        })
        .catch((error)=>{
            dispatch({type: 'error'})
        })
    },[])
    return (
        <div>
            { state.post.title }
        </div>
    )
}

export default DataFetching
