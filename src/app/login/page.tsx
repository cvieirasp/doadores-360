"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const formSchema = z.object({
  email: z.string().email("Por favor, digite um endereço de e-mail válido."),
  password: z.string().min(1, "Por favor, digite sua senha."),
});

const LoginPage = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // WIP: Implement login logic
    console.log(values);
  };

  return (
    <>
      <div className="container max-w-[980px] my-24 p-0 overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
        <div className="h-[400px] w-[100%] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="hidden h-full flex-col justify-center bg-primary text-secondary p-10 lg:flex dark:border-r">
            <div className="flex items-center text-lg font-medium">
              Doadores 360
            </div>
            <div className="mt-12">
              <p className="space-y-2 text-md text-justify">
                Faça login para continuar contribuindo com a nossa missão de
                salvar vidas através da doação de sangue. Sua dedicação é
                essencial para garantir que tenhamos suprimentos adequados para
                atender às necessidades dos pacientes em todo o país.
              </p>
            </div>
          </div>

          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
                <p className="text-sm text-muted-foreground">
                  Digite seu e-mail e senha abaixo para acessar sua conta.
                </p>
              </div>

              <div className="grid gap-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="grid gap-2">
                      <div className="grid gap-1">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  className="my-1 shadow-sm transition duration-300"
                                  placeholder="Digite seu e-mail..."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="font-normal" />
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
                                  className="my-1 shadow-sm transition duration-300"
                                  placeholder="Digite sua senha..."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="font-normal" />
                            </FormItem>
                          )}
                        />
                        <Button
                          className="mt-4 transition duration-300"
                          type="submit"
                        >
                          Login
                        </Button>
                        <span className="mt-2 text-sm text-muted-foreground text-center">
                          Ainda não possui uma conta?{" "}
                          <Link className="font-bold" href="#">
                            Cadastre-se
                          </Link>
                        </span>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
