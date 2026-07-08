"use client";

import { useState } from "react";
import Container from "@/components/Shared/Container";
import Button from "@/components/Buttons/Button";

export default function ContactForm({
    heading,
    subheading,
    fields,
    submitLabel,
    pgColor = "#FDFAE3",
}) {
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section
            style={{ backgroundColor: pgColor }}
            className={`relative py-16 sm:py-20 lg:py-24`}
        >
            <div className="absolute right-0 top-0 w-[25%] h-[50%] bg-[url('/images/rightCornerLines.png')] bg-cover bg-no-repeat" />
            <Container className="relative">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="font-title text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                        {heading}
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl font-body text-base text-gray-body sm:text-lg">
                        {subheading}
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="relative mx-auto mt-12 max-w-3xl space-y-4"
                    noValidate
                >
                    <div className="grid gap-4 sm:grid-cols-2">
                        {fields
                            .filter((f) => f.half)
                            .map((field) => (
                                <div key={field.name}>
                                    <label
                                        htmlFor={field.name}
                                        className="sr-only"
                                    >
                                        {field.label}
                                    </label>
                                    <input
                                        id={field.name}
                                        name={field.name}
                                        type={field.type}
                                        required={field.required}
                                        placeholder={`${field.label}${field.required ? " *" : ""}`}
                                        value={formData[field.name] || ""}
                                        onChange={handleChange}
                                        className="w-full border border-[#1B2433] px-4 py-3.5 font-form text-sm uppercase tracking-wide text-navy placeholder:text-[#00272B] focus:border-green focus:outline-none"
                                    />
                                </div>
                            ))}
                    </div>

                    {fields
                        .filter((f) => !f.half && f.type !== "textarea")
                        .map((field) => (
                            <div key={field.name}>
                                <label htmlFor={field.name} className="sr-only">
                                    {field.label}
                                </label>
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    required={field.required}
                                    placeholder={`${field.label}${field.required ? " *" : ""}`}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                    className="w-full border border-[#1B2433] px-4 py-3.5 font-form text-sm uppercase tracking-wide text-navy placeholder:text-[#00272B] focus:border-green focus:outline-none"
                                />
                            </div>
                        ))}

                    {fields
                        .filter((f) => f.type === "textarea")
                        .map((field) => (
                            <div key={field.name}>
                                <label htmlFor={field.name} className="sr-only">
                                    {field.label}
                                </label>
                                <textarea
                                    id={field.name}
                                    name={field.name}
                                    required={field.required}
                                    rows={6}
                                    placeholder={`${field.label}${field.required ? " *" : ""}`}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                    className="w-full resize-none border border-[#1B2433] px-4 py-3.5 font-form text-sm uppercase tracking-wide text-navy placeholder:text-[#00272B] focus:border-green focus:outline-none"
                                />
                            </div>
                        ))}

                    <div className="flex justify-end pt-2">
                        <Button
                            type="submit"
                            variant="primary"
                            size="md"
                            disabled={submitted}
                            rounded={false}
                        >
                            {submitted ? "Message Sent" : submitLabel}
                        </Button>
                    </div>
                </form>
            </Container>
        </section>
    );
}
