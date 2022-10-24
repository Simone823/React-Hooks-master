import React, {useState, useEffect} from "react";

const ControlledInput = () => {

  // name 
  const [name, setName] = useState('');

  // email
  const [email, setEmail] = useState('');

  // phone
  const [phone, setPhone] = useState('');

  // user array
  const [users, setUsers] = useState([]);

  // change name
  const changeName = (e) => {
    // set name event target value
    setName(e.target.value);
  }

  // change email
  const changeEmail = (e) => {
    // set email e target value
    setEmail(e.target.value);
  }

  // change phone
  const changePhone = (e) => {
    // set phone e target value
    setPhone(e.target.value);
  }

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // if name email phone
    if(name && email && phone) {
      alert('form inviato');

      // set users
      setUsers([
        // spread operator users
        ...users,
        {
          name: name,
          email: email,
          phone: phone
        }
      ]);

      // reset form
      setName('');
      setEmail('');
      setPhone('');
    } else {
      alert('Compila i campi esistenti');
    }
  }

  // use effect users
  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="container">
      <h2 className="mb-4">Controlled Input Component</h2>
      
      {/* form */}
      <form className="form" onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-3 row align-items-center">
          <label htmlFor="name" className="form-label col-12 col-md-4">Nome:</label>
          <input onChange={changeName} value={name} type="text" className="col-12 col-md-8" id="name" placeholder="Nome"/>
        </div>

        {/* email */}
        <div className="mb-3 row align-items-center">
          <label htmlFor="email" className="form-label col-12 col-md-4">Email address:</label>
          <input onChange={changeEmail} value={email} type="email" className="col-12 col-md-8" id="email" placeholder="Indirizzo E-Mail"/>
        </div>

        {/* phone */}
        <div className="mb-3 row align-items-center">
          <label htmlFor="phone" className="form-label col-12 col-md-4">Telefono:</label>
          <input onChange={changePhone} value={phone} type="tel" className="col-12 col-md-8" id="phone" placeholder="Telefono"/>
        </div>

        {/* btn */}
        <button type="submit" className="btn btn-primary">Invia</button>
      </form>
    </div>
  );
};

export default ControlledInput;
