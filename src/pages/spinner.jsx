import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

export default function Spinner() {
    let [color, setColor] = useState("#ffffff");
    const [loading, setLoading] = useState(true);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "white",
    };
    return (
        <div className='h-screen bg-black'>
            <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
