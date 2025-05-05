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
import { registerSchema } from "../register/schema";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

type RegisterSchema = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <div className="flex h-screen">
      <div className="flex h-screen w-1/2 flex-col items-center justify-center p-4">
        <Card className="w-full bg-transparent">
          <CardHeader>
            <CardTitle>Criar Conta</CardTitle>
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
                <Button>Criar conta</Button>
              </form>
            </Form>
            <div className="text-muted-foreground mt-4 flex items-center justify-between text-sm">
              Ainda não possui uma conta? <Link href="/login">Fazer login</Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/2 bg-white">Logo da página</div>
    </div>
  );
};

export default RegisterForm;
