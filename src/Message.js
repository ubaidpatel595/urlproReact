import styles from './css/message.module.css'
import React, { useEffect, useRef } from 'react'
function Message({ message, setMessage }) {
    const contRef = useRef(null);
    let messageTimeout = null;
    useEffect(() => {
        if (message.visible) {
            setTimeout(() => {
                contRef.current.classList.add(styles.animateMessage)
            }, 10)
            messageTimeout = setTimeout(() => {
                setMessage({ ...message, visible: false })
            }, 5000)
        }
    })
    return (
        (message.visible ? <div ref={contRef} className={`${styles.message} ${(message.type.toUpperCase() === 'SUCCESS' ? styles.success : styles.error)}
        `} onClick={() => {
                clearTimeout(messageTimeout)
                setMessage({ ...message, visible: false })
            }}>
            <div>{message.content}</div>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
                <path d="m254.038-220.078-33.486-33.96L446.039-480 220.552-705.962l33.486-33.96L480-513.961l225.962-225.961 33.486 33.96L513.961-480l225.487 225.962-33.486 33.96L480-446.039 254.038-220.078Z" />
            </svg>
        </div> :
            <div ref={contRef}></div>)
    )
}
export default Message