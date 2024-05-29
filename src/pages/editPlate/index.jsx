import Form from '../../components/Form'

const EditPlate = () => {
    return (
        <>
        <h1>Editar prato</h1>
        <Form operation={'patch'}></Form>
        </>
    )
}

export default EditPlate