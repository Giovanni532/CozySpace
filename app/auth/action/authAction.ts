"use server";

import supabase from "@/lib/supabase";
import { z } from "zod";

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, un chiffre et un symbole."),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
});

export async function signup(formData: FormData) {
    // const { data, error } = await supabase.auth.signUp({
    //     email,
    //     password,
    // });

    // if (error) {
    //     throw new Error(error.message);
    // }

    // return data;
    const result = signupSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const { email, password, firstName, lastName } = result.data;
    // Do something with the validated data.

    return {
        errors: {},
    };
}

export async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
}