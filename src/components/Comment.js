import React  from 'react'

function Comment({comment: {user, text}}) {
    return (
        <div>
            <strong>{user}</strong>
            <p>{text}</p>
        </div>
    )
}

export default Comment