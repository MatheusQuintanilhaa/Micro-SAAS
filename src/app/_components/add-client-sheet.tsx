"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { clientSchema } from "../app/actions/schema";
import { toast } from "sonner";

type ClientSchema = z.infer<typeof clientSchema>

const AddClientSheet = () => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const form = useForm<ClientSchema>({
        resolver: zodResolver(clientSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: ""
        },
    })

    const handleCreateClient = async (values: ClientSchema) => {
        console.log("Formulário submetido com valores:", values);
        setIsLoading(true);
        
        try {
            const result = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName: values.username,
                    email: values.email,
                    phone: values.phone
                }),
            })
            console.log("Cliente criado com sucesso:", result);

            const data = await result.json()
            console.log(data)
            
            form.reset();
            setOpen(false); // Fechar o sheet
            toast.success("Cliente criado com sucesso");
        } catch (error) {
            console.error("Erro ao criar cliente:", error);
            
            // Mostrar mensagem de erro mais específica
            const errorMessage = error instanceof Error
                ? error.message 
                : "Erro desconhecido ao criar cliente";
            
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button>Adicionar cliente</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Adicionar Cliente</SheetTitle>
                </SheetHeader>
                <div className="px-4 space-y-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleCreateClient)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder="Digite o nome do cliente" 
                                                {...field} 
                                                disabled={isLoading}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Adicione o nome do cliente
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder="Digite o nome do cliente" 
                                                {...field} 
                                                disabled={isLoading}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Adicione o email do cliente
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder="Digite o número do cliente" 
                                                {...field} 
                                                disabled={isLoading}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Adicione o número do cliente
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-2">
                                <Button 
                                    type="submit" 
                                    disabled={isLoading}
                                    className="flex-1"
                                >
                                    {isLoading ? "Criando..." : "Criar cliente"}
                                </Button>
                                <Button 
                                    type="button" 
                                    variant="outline" 
                                    onClick={() => setOpen(false)}
                                    disabled={isLoading}
                                >
                                    Cancelar
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default AddClientSheet;