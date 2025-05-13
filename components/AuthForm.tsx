"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Form } from "@/components/ui/form"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"
import { to } from './../.next/static/chunks/[turbopack]_browser_dev_hmr-client_hmr-client_ts_61dcf9ba._';


const authFormSchema = (type: FormType) => {
    return z.object({
      name: type === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
      email: z.string().email(),
      password: z.string().min(8).max(50),
    })
}

const AuthForm = ({ type }:{type: FormType}) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(type === "sign-up") {
        toast.success('Account created successfully!, please sign in to continue')
        router.push('/sign-in')
      } else {
        toast.success('Logged in successfully!')
        router.push('/')
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong : ${error}')
    }
  }

  const isSignIn = type === "sign-in"

  return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <Image 
                    src="/logo.svg"
                    alt="logo" 
                    height={32} 
                    width={38} 
                />

                <h2 className="text-primary-100">PrepWise</h2>

                <h3 className="">Practice Job With AI</h3>
            </div>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {!isSignIn && (
                <FormField
                    name="name"
                    control={form.control}
                    label="Name"
                    placeholder="Your name"
                    type="text"
                />
            )}
            <FormField
                name="email"
                control={form.control}
                label="Email"
                placeholder="Your email"
                type="email"
            />
            <FormField
                name="password"
                control={form.control}
                label="Password"
                placeholder="Your password"
                type="password"
            />
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember" className="label">Remember me</label>
                </div>
                <Link href="/forgot-password" className="text-sm text-user-primary hover:underline">Forgot password?</Link>
            </div>
            <Button type="submit" className="btn"> {isSignIn ? 'Sign in' : 'Create an Account'} </Button>
        </form>
        </Form>
        <p className="text-center">
              {isSignIn ? "Don't have an account?" : "Already have an account?"} 
            <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
              {!isSignIn ? 'Sign in' : 'Create an Account'}
            </Link>
        </p>
    </div>
    </div>

  )
}

export default AuthForm