import { useState } from 'react';


const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''  
    });

    const [errors, setErrors] = useState({});
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

         const newErrors = {};

        if (!username){
            newErrors.username = 'Username is required';
         
        }
        if (!email){
            newErrors.email = 'Email is required';
         
        }
        if (!password){
            newErrors.password = 'Password is required';
         
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors('');
        console.log('Form submitted:', formData);
        
    };


    return(
        <form onSubmit={handleSubmit}>
            {errors && <p style={{ color: 'red' }}>{errors}</p>}
            
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