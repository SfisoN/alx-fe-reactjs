import { useState } from 'react';


const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''  
    });

    const [error, setError] = useState('');
    const { username, email, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError('All fields are required');
            return;
        }

        setError('');
        console.log('Form submitted:', formData);
        
    };


    return(
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />

            <input 
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>    
    );
};

export default RegistrationForm;