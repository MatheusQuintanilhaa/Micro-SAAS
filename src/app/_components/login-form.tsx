"use client";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../login/schema";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

type FormSchema = z.infer<typeof formSchema>;

const LoginForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="flex h-screen">
      <div className="flex h-screen w-1/2 flex-col items-center justify-center p-4">
        <Card className="w-full bg-transparent">
          <CardHeader>
            <CardTitle>Acessar conta</CardTitle>
            <CardDescription>
              Insira suas informações para acessar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-4">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Insira seu e-mail" {...field} />
                        </FormControl>
                        <FormDescription>
                          Insira um e-mail válido
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="Insira sua senha" {...field} />
                        </FormControl>
                        <FormDescription>Insira sua senha</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button>Fazer Login</Button>
              </form>
            </Form>
            <div className="text-muted-foreground mt-4 flex items-center justify-between text-sm">
              Ainda não possui uma conta?{" "}
              <Link href="/register">Criar conta</Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/2 bg-white">Logo da página</div>
    </div>
  );
};

export default LoginForm;
