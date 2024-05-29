import './style.css'
import PlateItem from '../../components/PlateItem'
import axios from 'axios'
import { useEffect, useState } from 'react'

const baseUrl = 'http://localhost:3000'

const Dashboard = () => {

    const [data, setData] = useState()
    
    const getPlates = async () => {
        axios.get(`${baseUrl}/cardapio`).then(response => {
            setData(response.data)
        })
    }
    
    useEffect(() => {
        async function a(){
            await getPlates()
        }
        a()
    }, [])
    
    var key = 0
    return (
        <>
            <h1>Dashboard</h1>
            <div className="newPlate">
                <a className='newPlateButton'>Adicionar prato</a>
            </div>
            <div className="container">
                {data != undefined ? data.map(plate => {
                    key += 1
                    return <PlateItem name={plate.name} id={plate.id} imageUrl={plate.imageUrl} key={key}/>
                }) : ''}
            </div>
        </>
    )
}

export default Dashboard