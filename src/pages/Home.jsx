import { ErrorResponse } from '@remix-run/router';
import React from 'react'
import { useForm } from "react-hook-form";

const Home = () => {
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
        defaultValues: {
            language: 'javascript',
            note: 15
        }
    });
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <h1 onClick={() => setValue('time', '10ans')}>Home</h1>
            <h2 onClick={() => console.log(getValues('language'))}>Sous titre</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Language' {...register("language", { required: true, minLength: 8 })} />
                {
                    errors.language &&
                    <p style={{ fontSize: '12px', color: 'red' }}>
                        {errors.language.type === 'required' && "Ce champs est requis"}
                        {errors.language.type === 'minLength' && "8 caractères minimum"}
                    </p>
                }
                <input type="text" placeholder='like' {...register("like")} />
                <input type="text" placeholder='time' {...register("time")} />
                <input type="text" placeholder='note' {...register("note")} />
                <button type='submit'>valider</button>
            </form>
        </div>
    )
}

export default Home