import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
import dynamic from 'next/dynamic';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import LoginAPI from "./api/auth";

export default function Login() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    // const [error, setError] = useState<string | null>(null)
    const form = useForm<FieldValues>();
    const { register, control, handleSubmit, formState } = useForm<FieldValues>();
    const { errors } = formState;
    const queryClient = useQueryClient();

    const DevT: React.ElementType = dynamic(
        () => import('@hookform/devtools').then((module) => module.DevTool),
        { ssr: false }
    );

    const login = useMutation({
        mutationFn: LoginAPI,
        onSuccess: (data) => {
            console.log(data);
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