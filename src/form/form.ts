import { createFormContext } from "@mantine/form";

export interface ISimpleTextKeys {
    storeKey: "firstname" | "textKey" | "numberKey" | "handbookValue" | "";
}

export interface IForm {
    pairs: string[];
    firstname: string;
    textKey: string;
    numberKey: number | undefined;
    handbookData: string[];
    handbookValue: string;
}

export const [FormProvider, useFormContext, useAppForm] =
    createFormContext<IForm>();
