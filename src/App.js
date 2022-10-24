import { useState } from "react";
import "./assets/css/App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Title from "./components/Title";
import login from "../src/images/login.svg"
function App() {
  //Estados del formulario
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  
  //Estado para los errores
  const [error, setError] = useState(false);

  const handleTextChange = (e) => {
   setPassword(e.target.value);
  };
  //Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (name === '' || password === ''){
    
      setError(true);
    } else {
        alert(`
        
       felicidades ${name}  ingresate correctamente 🥳🥳`);
      }
      
    // setError(false);
    e.target.reset();
    setName("");
    setPassword("");
  };

  return (
    <div className="App">
       <div className="login-info-container">
     
      <form className="formulario" onSubmit={validarDatos}>

        {error ? <p>Todos los campos son obligatorios</p> : null}
      
        <div className="form-group">
        <Title title={'Estado de los componentes y eventos'}/>
          <Title label="Nombre" />
          <Input
            placeholder="ingrese un texto"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Title label="Contraseña" />
          <Input
            placeholder="ingrese una contraseña"
            onChange={handleTextChange}
           className={'input-password'}
            value={password}
          />
          {name !== '' &&
            <div className='hiddenButton'>
              {password === '252525' ? <Button className={'button'}/> : null}
            </div>
          }
       
        </div>
       
      </form>
      </div>
      <div className="image-container"><img src={login}/></div>
      
      </div>
    
  );
}

export default App;
