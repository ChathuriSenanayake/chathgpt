"use client";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

type NameTextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    // Optional controlled value (if provided, component becomes controlled)
    value?: string;
    // Optional submit handler that may return a Promise
    onSubmit?: (value: string) => void | Promise<void>;
};

export const NameTextField: React.FC<NameTextFieldProps> = ({ onSubmit, value: controlledValue, ...inputProps }) => {
    const [internalValue, setInternalValue] = useState<string>(controlledValue ?? "");
    const router = useRouter();

    // keep internal value in sync when used as controlled
    useEffect(() => {
        if (controlledValue !== undefined) setInternalValue(controlledValue);
    }, [controlledValue]);

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        // always forward the original keydown
        if (inputProps.onKeyDown) inputProps.onKeyDown(e as any);

        if (e.key === "Enter") {
            try {
                if (onSubmit) {
                    // support promise or sync handler
                    await Promise.resolve(onSubmit(internalValue));
                    // after user handler resolves, navigate to results
                    router.push('/your-fortune?name=' + encodeURIComponent(internalValue));
                } else {
                    // no handler — show loader briefly then navigate
                    await new Promise((r) => setTimeout(r, 600));
                    router.push('/your-fortune?name=' + encodeURIComponent(internalValue));
                }
                // don't setLoading(false) after navigation (component will unmount)
            } catch (err) {
                // If submission fails, allow retry
                console.error(err);
            }
        }
    };

    return (
        <>
            <motion.p
                className="items-center justify-center text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >Tell me your first name</motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="px-10 items-center justify-center flex flex-col">
                <div className="flex items-center gap-3">
                    <input
                        value={internalValue}
                        onChange={(e) => {
                            // update internal value and call external onChange if present
                            setInternalValue(e.target.value);
                            if (inputProps.onChange) inputProps.onChange(e as any);
                        }}
                        onKeyDown={handleKeyDown}
                        disabled={inputProps.disabled}
                        aria-disabled={inputProps.disabled}
                        aria-label={inputProps['aria-label'] ?? 'Your first name'}
                        placeholder={(inputProps.placeholder as string) ?? 'Your name'}
                        className={`focus:outline-none border-0 h-14 border-b-white border-b text-center text-2xl text-white bg-transparent disabled:opacity-50 ${inputProps.className ?? ''}`}
                        {...inputProps}
                    />
                </div>
            </motion.div>
        </>
    );
};