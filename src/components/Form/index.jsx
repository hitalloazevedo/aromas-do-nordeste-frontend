import { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const baseUrl = 'http://localhost:3000'

const Form = ({operation}) => {
    const {id, name, description, imageUrl} = useParams()
    
    const [plateId] = useState(operation == 'patch' ? id : '')
    const [plateName, setPlateName] = useState(operation == 'patch' ? name : '')
    const [plateDescription, setPlateDescription] = useState(operation == 'patch' ? description : '')
    const [plateImageUrl, setPlateImageUrl] = useState(operation == 'patch' ? imageUrl : '')
    const [msg, setMsg] = useState('')

    const insertNewPlate = (e) =>{
        e.preventDefault();
        axios.post(`${baseUrl}/cardapio`, {
            name: plateName,
            description: plateDescription,
            imageUrl: plateImageUrl
        }).then(msg => {
            setMsg(msg.data.msg)
        })
    }

    const editPlate = (e) => {
        e.preventDefault();
        axios.patch(`${baseUrl}/cardapio`, {
            id: plateId,
            name: plateName,
            description: plateDescription,
            imageUrl: plateImageUrl
        }).then(msg => {
            setMsg(msg.data.msg)
        })
    } 

    return (
        <div className="form">
            <p>{msg}</p>
            <form>
                {operation == 'patch' ? <input value={plateId} placeholder='id' type="number" readOnly/>: ''}
                <input value={plateName} placeholder='nome do prato' type="text" onChange={(e) => setPlateName(e.target.value)} />
                <textarea value={plateDescription} name="descricao" cols={30} rows={10}  onChange={(e) => setPlateDescription(e.target.value)}></textarea>
                <input value={plateImageUrl} placeholder='url da imagem' type="text" onChange={(e) => setPlateImageUrl(e.target.value)}/>
                <input 
                    type="submit" 
                    value={operation == 'post' ? 'Cadastar' : operation == 'patch' ? 'Editar': 'Botao'}
                    onClick={operation == 'post' ? insertNewPlate : operation == 'patch' ? editPlate : ''}
                />
            </form>
        </div>
    )
}

export default Form