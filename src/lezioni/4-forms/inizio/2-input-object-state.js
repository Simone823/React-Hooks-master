import React, {useState, useEffect} from "react";

const ControlledInput = () => {
    // user
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // users
    const [users, setUsers] = useState([]);

    // handle change input
    const handleChange = (e) => {
        // input id, value
        const {id, value} = e.target;

        // set user
        setUser({...user, [id]: value});
    }

    // handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // if user.name, user.email, user.phone
        if(user.name && user.email && user.phone) {
            alert('form inviato');

            // set users
            setUsers([
                ...users,
                {
                    ...user
                }
            ]); 

            // reset input form
            setUser({
                name: '',
                email: '',
                phone: ''
            });
        } else {
            alert('compila i campi');
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
                <input onChange={handleChange} value={user.name} type="text" className="col-12 col-md-8" id="name" name="name" placeholder="Nome"/>
            </div>

            {/* email */}
            <div className="mb-3 row align-items-center">
                <label htmlFor="email" className="form-label col-12 col-md-4">Email address:</label>
                <input onChange={handleChange} value={user.email} type="email" className="col-12 col-md-8" id="email" name="email" placeholder="Indirizzo E-Mail"/>
            </div>

            {/* phone */}
            <div className="mb-3 row align-items-center">
                <label htmlFor="phone" className="form-label col-12 col-md-4">Telefono:</label>
                <input onChange={handleChange} value={user.phone} type="tel" className="col-12 col-md-8" id="phone" name="phone" placeholder="Telefono"/>
            </div>

            {/* btn */}
            <button type="submit" className="btn btn-primary">Invia</button>
        </form>
    </div>
    );
};

export default ControlledInput;
