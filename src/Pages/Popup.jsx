import { useEffect } from 'react'
import "./css/popup.css"
import { useState } from 'react'
function Popup() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    },[]);
    return (
        <div className='payment-loader'>
            <div className='select-payment-mode'>
                {(isLoading) ? (<span className="loader"></span>
                ) : (<h2>Payment succesfuly 😇</h2>)}
            </div>
        </div>
    )
}

export default Popup