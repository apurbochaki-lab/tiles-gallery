'use client'

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { useState } from "react";


const RegisterPage = () => {
    const [showPass, setShowPass] = useState(false)


    const { register, handleSubmit } = useForm()
    const router = useRouter();

    const handleRegisterFunc = async (data) => {
        console.log(data)

        const { data: userData, error } = await authClient.signUp.email({
            name: data.name,
            image: data.image,
            email: data.email,
            password: data.password
        })

        if (!error) {
            toast.success("Register success!")
            router.push("/login")
        }
    }

    // Google Authentication
    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        })
    }

    return (
        <div className="py-20 m-5">
            <Form onSubmit={handleSubmit(handleRegisterFunc)} className="max-w-100 flex flex-col gap-4 mx-auto p-5 rounded-lg shadow-md border-2 border-black/10 bg-blue-200">
                <h2 className="text-2xl font-bold text-center">Register Your Account</h2>

                <TextField
                    isRequired
                    name="name"
                    type="text"
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name"
                        {...register("name")} />
                </TextField>

                <TextField
                    isRequired
                    name="image"
                    type="url"
                >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your profile image URL"
                        {...register("image")} />
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
                        {...register("email")} />
                    <FieldError />
                </TextField>
                <TextField
                className={"relative"}
                    isRequired
                    minLength={8}
                    name="password"
                    type={showPass ? "text" : "password"}
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
                        {...register("password")}
                    />

                    <span>
                        <button
                            onClick={() => setShowPass(!showPass)}
                            className="cursor-pointer"
                            type="button">
                            {showPass
                                ? <EyeSlash className="absolute top-[33px] right-3"></EyeSlash>
                                : <Eye className="absolute top-[33px] right-3"></Eye>
                            }
                        </button>
                    </span>

                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button variant="outline" className={"bg-green-300 font-bold"} type="submit">
                        <Check />
                        Register
                    </Button>
                    <Button type="reset" variant="outline" className={"bg-red-100 font-bold"}>
                        Clear
                    </Button>
                </div>

                <div className="mt-3">
                    <Button
                        onClick={handleGoogle}
                        className="w-full border border-black/20 shadow-sm" variant="tertiary">
                        <Icon icon="devicon:google" />
                        Sign in with Google
                    </Button>
                </div>

                <div>
                    <h2 className="text-center text-lg font-medium text-muted">Already have an account? <Link href={"/login"} className="text-green-700 font-bold">Login</Link></h2>
                </div>
            </Form>
        </div>
    );
};

export default RegisterPage;