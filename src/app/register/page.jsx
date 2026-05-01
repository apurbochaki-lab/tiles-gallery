'use client'

import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const {register, handleSubmit} = useForm()

    const handleLoginFunc = (data) => {
        console.log(data)
        
    }

    return (
        <div className="py-20">
            <Form onSubmit={handleSubmit(handleLoginFunc)} className="flex w-96 flex-col gap-4 mx-auto p-5 rounded-lg shadow-md border-2 border-black/10 bg-blue-200">
                <h2 className="text-2xl font-bold text-center">Register Your Account</h2>

                <TextField
                    isRequired
                    name="name"
                    type="text"
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" 
                    {...register("name")}/>
                </TextField>

                <TextField
                    isRequired
                    name="image"
                    type="url"
                >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your profile image URL" 
                    {...register("image")}/>
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" 
                    {...register("email")}/>
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" 
                    {...register("password")}/>
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button variant="outline" className={"bg-green-300 font-bold"} type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="outline" className={"bg-red-100 font-bold"}>
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default RegisterPage;