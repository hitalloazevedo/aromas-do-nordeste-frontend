import axios from 'axios'
import './style.css'
import { Link } from 'react-router-dom'

const baseUrl = 'http://localhost:3000'

const PlateItem = ({id, imageUrl, name, description, setData}) => {

    const deletePlate = (e) => {
        e.preventDefault()
        axios.delete(`${baseUrl}/cardapio/${id}`)
        setData(data => data.filter((plate) => plate.id !== id))
    }

    return (
        <div className="item">
        <img className='plateImage' src={imageUrl} alt="imagem" />
        <div className="infos">
            <p>id: {id}</p>
            <p className='plateName'>{name}</p>
        </div>

        <div className="buttons">
            <Link className='btn Editar' to={`/dashboard/edit/${id}/${name}/${description}/${imageUrl}`}>Editar</Link>
            <a id='btnDeletar' className='btn Deletar' onClick={deletePlate}>Deletar</a>
        </div>
    </div>
    )
}

export default PlateItem