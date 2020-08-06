import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
 
  
  function setValue(chave, valor){
    setValues({
      ...values, 
      [chave]: valor, //nome: 'valor'
    })
  }

  function handlerChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias( [
          ...categorias,
          values
          ] );

          setValues(valoresIniciais)
        }}>
        
        <FormField
          label = "Nome da Categoria"
          type="text"
          name="nome"     
          value={values.nome}
          onChange = {handlerChange}
        />
      

{/*         <div>
          <label>
            Descrição: 
            <textarea
              type="text" 
              value={values.descricao}
              name="descricao"
              onChange = {handlerChange}
            />
          </label>
        </div> */}
        
        <FormField
          label = "Descrição"
          type="text"
          name="descricao"     
          value={values.descricao}
          onChange = {handlerChange}
        />

        <FormField
          label = "Cor"
          type="color"
          name="cor"     
          value={values.cor}
          onChange = {handlerChange}
        />

        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {categorias.map( (categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        } ) }
      </ul>

      <Link to ="/">
          Ir para home
      </Link>
    </PageDefault>
  )
}

  export default CadastroCategoria;