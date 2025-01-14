"use server";

import supabase from "@/lib/supabase";
import { z } from "zod";

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
});

export async function signup(email: string, password: string, firstName: string, lastName: string) {
    // const { data, error } = await supabase.auth.signUp({
    //     email,
    //     password,
    // });

    // if (error) {
    //     throw new Error(error.message);
    // }

    // return data;
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