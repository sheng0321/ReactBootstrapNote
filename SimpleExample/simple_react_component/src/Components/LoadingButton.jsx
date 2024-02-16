import React, { useEffect, useSate, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';


const LoadingButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    function handleClick() {

        setIsLoading(true);
    }
    useEffect(() => {

        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 2000))
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => { setIsLoading(false) })

        }

    }, [isLoading])
    return (
        //core code: onClick={!isLoading ? handleClick : null} 
        <Button onClick={!isLoading ? handleClick : null} disabled={isLoading}>{isLoading ? 'loading...' : 'Click to load'}</Button>
    )
}

export default LoadingButton
