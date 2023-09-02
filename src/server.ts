import { z } from "zod";

const userSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "Nome precisa de no mínimo 3 caracteres." })
    .transform((name) => name.toLocaleUpperCase()), //Podemos aplicar transformações nos dados
  idade: z.number().min(18, { message: "Somente maiores de idade." }),
});

//Definiremos o User via zod infer.
// interface User {
//   nome: String;
//   idade: Number;
// }

type User = z.infer<typeof userSchema>;

function showUser(user: User) {
  const { nome, idade } = userSchema.parse(user);
  console.log(nome, idade);
}

showUser({ nome: "Elissandro", idade: 18 });
