import { NumberInput } from "@mantine/core";
import { useFormContext } from "../../form/form";
import { IInputGeneralProps } from ".";

export interface ISimpleNumberInput extends IInputGeneralProps {}

export function SimpleNumberInput({
    storeKey,
    placehodler,
}: ISimpleNumberInput) {
    const form = useFormContext();

    const fieldValue: number | undefined = form.getInputProps(storeKey).value;

    const setValue = (newValue: number | "") => {
        if (newValue === "") {
            form.setFieldValue(storeKey, undefined);
            return;
        }
        form.setFieldValue(storeKey, newValue);
    };

    return (
        <>
            <NumberInput
                hideControls
                onChange={(value: number | "") => setValue(value)}
                value={fieldValue}
                placeholder={placehodler}
            />
        </>
    );
}
