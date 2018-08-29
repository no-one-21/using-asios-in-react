import React from 'react';

const Username=(props)=>{
    return(
        <form onSubmit={props.getUser}>
        <input type='text' name='username'/>
        <button> submit </button>
        </form>
    );
}
export default Username;