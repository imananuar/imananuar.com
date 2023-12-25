import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
import dynamic from 'next/dynamic';

export default function Login() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    // const [error, setError] = useState<string | null>(null)
    const form = useForm<FieldValues>();
    const { register, control, handleSubmit, formState } = useForm<FieldValues>();
    const { errors } = formState;

    const DevT: React.ElementType = dynamic(
        () => import('@hookform/devtools').then((module) => module.DevTool),
        { ssr: false }
    );

    async function testSubmit(payload: FieldValues) {
        try {
            const response = await fetch("http://localhost:8000/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },                  
                body: JSON.stringify({
                    username: "imananuar",
                    password: "iman33"
                })
            })

            if (!response.ok) { 
                throw new Error("Failed to submit the data. Please try again");
            }

            const data = await response.json()
        } catch (error) {
            // setError(error.message);
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <Form {...form}>
                    <form onSubmit={handleSubmit(testSubmit)} >
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
                                        {...register("password")}
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