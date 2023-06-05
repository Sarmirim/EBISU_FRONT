import { Select } from "@mantine/core";
import { useFormContext } from "../../form/form";
import { IInputGeneralProps } from ".";

export interface ISimpleSelectInput extends IInputGeneralProps {
    dataKey: string;
}

export function SimpleSelectInput({
    storeKey,
    placehodler,
    dataKey,
}: ISimpleSelectInput) {
    const form = useFormContext();

    const fieldValue: string = form.getInputProps(storeKey).value;
    const dataValue: string[] = form.getInputProps(dataKey).value;

    const setValue = (newValue: string | null) => {
        if (newValue === null) {
            form.setFieldValue(storeKey, "");
            return;
        }
        form.setFieldValue(storeKey, newValue);
    };

    return (
        <>
            <Select
                // clearable
                rightSectionWidth={undefined}
                onChange={(value: string | null) => setValue(value)}
                data={dataValue}
                value={fieldValue}
                placeholder={placehodler}
            />
        </>
    );
}
