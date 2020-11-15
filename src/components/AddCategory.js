import React,{useState} from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("")
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
        //Ya que no recibi las categorias
        //El setCategories se puede llamar por medio de un callback
        //que trae el estado anterior
        setCategories(cats=>[inputValue,...cats]);
        setInputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}