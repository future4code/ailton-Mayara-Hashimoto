import {useState} from 'react'

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);
    
    const onChange = (event) => {
        const {name, value} = event.target;
        if(Number(value) > 0) {
            setForm({...form, [name]: Number(value)}); 
        } else {
            setForm({...form, [name]: value});
        }
       
    };
    const cleanFields = () => {
        setForm(initialState);
    };
    return { form, onChange, cleanFields };
}

