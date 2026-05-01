'use client'

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";


const LogInPage = () => {

    const { register, handleSubmit } = useForm()

    const handleRegisterFunc = async (data) => {
        console.log(data)

        const { data: userData, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,

            callbackURL: "/"
        })

        if (!error) {
            toast.success("Login successful!")
        }
        else {
            toast.error(error.message)
        }
    }

    return (
        <div className="py-20">
            <Form onSubmit={handleSubmit(handleRegisterFunc)} className="flex w-96 flex-col gap-4 mx-auto p-5 rounded-lg shadow-md border-2 border-black/10 bg-green-100">
                <h2 className="text-2xl font-bold text-center">Login Your Account</h2>

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
                        {...register("email")} />
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
                        {...register("password")} />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button variant="outline" className={"bg-blue-300 font-bold"} type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="outline" className={"bg-red-100 font-bold"}>
                        Reset
                    </Button>
                </div>

                <div className="mt-3">
                    <Button className="w-full border border-black/20 shadow-sm" variant="tertiary">
                        <Icon icon="devicon:google" />
                        Sign in with Google
                    </Button>
                </div>

                <div>
                    <h2 className="text-center text-lg font-medium text-muted">Don&apos;t have an account? <Link href={"/register"} className="text-blue-700 font-bold">Register</Link></h2>
                </div>
            </Form>


        </div>
    );
};

export default LogInPage;