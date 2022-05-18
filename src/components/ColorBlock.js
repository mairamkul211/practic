import { useEffect, useState } from 'react'
import './Color.css'

const ColorBlock = () => {
    const [color, setColor] = useState('red')

    useEffect(() => {
        const time = setInterval(()=> {
            if (color == 'red') {
                setColor('blue')
            }else if(color == 'blue'){
                setColor('red')
            }
        }, 1000)

    }, [])
    

    return(
        <>
        <div style={{background: color}} className='container'></div>
        </>
    )
}

export default ColorBlock