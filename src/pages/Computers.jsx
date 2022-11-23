import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Card from '../hoc/Card';

const Computers = () => {
    const { register, handleSubmit, reset, formState: { errors }, setValue, getValues } = useForm();
    const [computers, setComputers] = useState([])
    const onSubmit = data => {
        setComputers([...computers, data]);
        reset();
    }
    return (
        <div>
            <h1>Computers</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="inline-block" placeholder='name' {...register("name", { required: true, maxLength: 30 })} />
                {
                    errors.name &&
                    <p style={{ fontSize: '12px', color: 'red' }}>
                        {errors.name.type === 'required' && "Ce champs est requis"}
                        {errors.name.type === 'maxLength' && "30 caractères maximum"}
                    </p>
                }
                <select {...register("brand")}>
                    <option value="Dell">Dell</option>
                    <option value="IBM">IBM</option>
                    <option value="Apple">Apple</option>
                </select>
                <textarea name="description" {...register("description")}></textarea>
                <button type='submit'>valider</button>
            </form>
            <div style={{ display: "flex" }}>
                {
                    computers.map((computer, i) => (
                        // <div key={i} style={{ border: "black solid 1px", padding: "10px", margin: "5px", backgroundColor: "whitesmoke" }}>
                        //     <h2> {computer.name} </h2>
                        //     <h3> {computer.brand} </h3>
                        //     <p> {computer.description} </p>
                        // </div>
                        <Card key={i}>
                            {computer.name} <br />
                            {computer.brand} <br />
                            {computer.description}
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
export default Computers