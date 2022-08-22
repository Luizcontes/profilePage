import Form from 'react-bootstrap/Form'

function Category({ handleInput }) {

    return (
        <Form.Select name='category' className='mb-2 text-muted shadow-none' size='sm' type='text' onChange={handleInput}>
            <option>Category</option>
            <option value="lazer">Lazer</option>
            <option value="eletronicos">Eletronicos</option>
            <option value="animias">Animias</option>
            <option value="desporto04">Desporto</option>
            <option value="moda">Moda</option>
            <option value="moveis">Moveis</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="veiculos">Veiculos</option>
            <option value="imoveis">Imoveis</option>
            <option value="emprego">Emprego</option>
            <option value="servicos">Servicos</option>
            <option value="equipamentos">Equipamentos</option>
            <option value="outros">Outros</option>
        </Form.Select>
    )
}

export default Category