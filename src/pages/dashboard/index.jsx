import './style.css'
import PlateItem from '../../components/PlateItem'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
    
    return (
        <>
            <h1 className='title'>Dashboard</h1>
            <div className="newPlate">
                <Link className='newPlateButton' to={'/dashboard/new'}>Adicionar prato</Link>
            </div>
            <div className="platesContainer">
                {data != undefined ? data.map(plate => {
                    return <PlateItem name={plate.name} id={plate.id} imageUrl={plate.imageUrl} description={plate.description} setData={setData}/>
                }) : ''}
            </div>
        </>
    )
}

export default Dashboard