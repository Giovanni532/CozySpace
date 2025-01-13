"use client";
import { Form, Input, Button } from '@/lib/NextUI';
import React from 'react'

export default function FormAuth({ type }: { type: "signup" | "login" }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const errors = [] as string[];

    if (password.length < 4) {
        errors.push("Le mot de passe doit contenir au moins 4 caractères.");
    }
    if ((password.match(/[A-Z]/g) || []).length < 1) {
        errors.push("Le mot de passe doit contenir au moins 1 lettre majuscule.");
    }
    if ((password.match(/[^a-z]/gi) || []).length < 1) {
        errors.push("Le mot de passe doit contenir au moins 1 symbole.");
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log(data);
    };

    if (type === "signup") {
        return (
            <Form className="w-full max-w-xs" validationBehavior="native" onSubmit={onSubmit}>
                <div className="flex md:flex-row gap-4">
                    <Input
                        isRequired
                        errorMessage="Veuillez entrer un prénom valide"
                        label="Prénom"
                        labelPlacement="outside"
                        name="firstName"
                        placeholder="Entrez votre prénom"
                        type="text"
                        value={firstName}
                        onValueChange={setFirstName}
                    />
                    <Input
                        isRequired
                        errorMessage="Veuillez entrer un nom de famille valide"
                        label="Nom de famille"
                        labelPlacement="outside"
                        name="lastName"
                        placeholder="Entrez votre nom de famille"
                        type="text"
                        value={lastName}
                        onValueChange={setLastName}
                    />
                </div>
                <Input
                    isRequired
                    errorMessage="Veuillez entrer un email valide"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Entrez votre email"
                    type="email"
                    value={email}
                    onValueChange={setEmail}
                />
                <Input
                    isRequired
                    errorMessage={() => (
                        <ul>
                            {errors.map((error, i) => (
                                <li key={i}>{error}</li>
                            ))}
                        </ul>
                    )}
                    isInvalid={errors.length > 0}
                    label="Mot de passe"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Entrez votre mot de passe"
                    type="password"
                    value={password}
                    onValueChange={setPassword}
                />
                <Button type="submit" variant="bordered">
                    S'inscrire
                </Button>
            </Form>
        );
    }

    return (
        <Form className="w-full max-w-xs" validationBehavior="native" onSubmit={onSubmit}>
            <Input
                isRequired
                errorMessage="Veuillez entrer un email valide"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Entrez votre email"
                type="email"
                value={email}
                onValueChange={setEmail}
            />
            <Input
                isRequired
                errorMessage="Veuillez entrer un mot de passe valide"
                label="Mot de passe"
                labelPlacement="outside"
                name="password"
                placeholder="Entrez votre mot de passe"
                type="password"
                value={password}
                onValueChange={setPassword}
            />
            <Button type="submit" variant="bordered">
                Se connecter
            </Button>
        </Form>
    );
}
