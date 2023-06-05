import { TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { ReactElement, useState } from "react";
import { IForm, useFormContext } from "../../form/form";

export function AddCryptoCard() {
    const form = useFormContext();
    const currentPairs: string[] = form.getInputProps("pairs").value;

    const addToFormPairs = (newPair: string) => {
        console.log(newPair);

        form.setFieldValue("pairs", [...currentPairs, newPair]);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        if (event.key === "Enter") {
            console.log(value);
            if (currentPairs.indexOf(value) === -1) {
                addToFormPairs(value);
                event.currentTarget.value = "";
            }
        }
    };

    return (
        <>
            <TextInput
                placeholder="enter pair and press enter"
                onKeyPress={handleKeyPress}
            />
        </>
    );
}
