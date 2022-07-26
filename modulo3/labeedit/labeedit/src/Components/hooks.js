import { useState } from "react";

export const useForm = (item) => {
    const [form, setForm] = useState(item)
    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name] : value})
    }
    const clearForm = () => {
        setForm(item)
    }
    return ( {
        form, onChange, clearForm
    } )
}   