import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormEvent, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import dynamic from 'next/dynamic';
import { useMutation } from "@tanstack/react-query";
import LoginAPI from "./api/auth";
import { useRouter } from "next/router";
import { HttpResponse } from "@/dto/http-response.dto";
import { LoginResponse } from "@/dto/auth.dto";
import { useCookies } from 'react-cookie';
import { jwtDecode } from "jwt-decode";


export default function Login() {
    const form = useForm<FieldValues>();
    const { register, control, handleSubmit, formState } = useForm<FieldValues>();
    const router = useRouter();
    const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);

    useEffect(() => {
        !!cookies.access_token ? router.push("/projects/main") : null
    }, [cookies])

    const DevT: React.ElementType = dynamic(
        () => import('@hookform/devtools').then((module) => module.DevTool),
        { ssr: false }
    );

    const dateFormat = (timestamp: number | undefined) => {

        if (typeof(timestamp) === "number") {
            // Create a new Date object using the milliseconds
            const date = new Date(timestamp * 1000 * 1000);
        }
    }

    const login = useMutation({
        mutationFn: LoginAPI,
        onSuccess: (response: HttpResponse<LoginResponse>) => {
            if (response.statusCode === 201) {
                const accessExpiryTime = new Date(jwtDecode(response.data.accessToken).exp * 1000 );
                const refreshExpiryTime = new Date(jwtDecode(response.data.refreshToken).exp * 1000 );
                setCookie('access_token', response.data.accessToken, { expires: accessExpiryTime })
                setCookie('refresh_token', response.data.refreshToken, {expires: refreshExpiryTime })
                router.replace("/projects/main");
            } else {
                alert("Incorrect username / password. Please try again.");
            }
        },
        onError(error, variables, context) {
            console.log("okay salah")
            console.log(error)
        },
    })

    async function callLoginAPI(payload: FieldValues) {
        login.mutateAsync({ payload });
    }

    return (
        <>
            <div>
                <Form {...form}>
                    <form onSubmit={handleSubmit(callLoginAPI)} >
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                    <FormControl>
                                        <Input 
                                        placeholder="Username"
                                        {...field} 
                                        type="text" 
                                        id="username" 
                                        { ...register("username", {
                                            required: "Username is required!"
                                        })}
                                        />
                                    </FormControl>
                                {/* <FormDescription>This is your public display name.</FormDescription> */}
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                    <FormControl>
                                        <Input
                                        type="password"
                                        placeholder="password" 
                                        {...field} 
                                        {...register("password", {
                                            required: "Password is required!"
                                        })}
                                        />
                                    </FormControl>
                                {/* <FormDescription>This is your public display name.</FormDescription> */}
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button className="bg-white">Submit</Button>
                    </form>
                    <DevT control={control} />
                </Form>
            </div>
        </>
    )
}