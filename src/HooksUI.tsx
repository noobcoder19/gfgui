import {useForm} from "react-hook-form";


interface IForm{
    name: string;
    email: string;
    password: string;
}


const myCallBack =(data: IForm) => {
    console.log("mycallback got invoked")
}

export default function HooksUI() {
    const {register,reset,handleSubmit, formState:{errors}} = useForm<IForm>()
    return (
        <form onSubmit={handleSubmit(myCallBack)}>
            <input type="text" placeholder="name" {...register("name",{
                required:true,
                minLength: {value:4, message:"Minimum length 4"},
                maxLength: {value:8, message: "maxlength is 8"}
            })}/>
            {errors.name?.message && <div>{errors.name.message}</div>}
            <input type="email" placeholder="email" {...register("email",{
                required: true,
                pattern: {value:/\w+@\w+\.\w+/, message: "email not matched"}

                
            })} />
                        {errors.email?.message && <div>{errors.email.message}</div>}

            <input type="password" placeholder="password" {...register("password")}/>
            <button onClick={() => reset()}>reset</button>
            <button type="submit">submit</button>
        </form>
    );
}