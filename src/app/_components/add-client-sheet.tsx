"use client"

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { clientSchema } from "../app/actions/schema";
import { createClient } from "../app/actions";
import { toast } from "sonner";

type ClientSchema = z.infer<typeof clientSchema>

const AddClientSheet = () => {
      const form = useForm<ClientSchema>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      username: "",
    },
  })

  const handleCreateClient = async (values: ClientSchema) => {
    try {
        await createClient(values)
        form.reset()
        toast("Cliente criado com sucesso")
    } catch (error) {
        console.log(error)
        toast.error("Erro ao criar cliente")
    }
  }


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Adicionar cliente</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Adicionar Cliente</SheetTitle>
                </SheetHeader>
                <div className="px-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleCreateClient)}>
                                <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormDescription>This is your public display name.</FormDescription>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                        />
                                        <Button type="submit">Criar cliente</Button>
                        </form>
                    </Form>
                </div>
            </SheetContent>
        </Sheet>
    );
}
 
export default AddClientSheet;