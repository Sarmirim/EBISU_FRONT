import { TextInput } from "@mantine/core";
import { useFormContext } from "../../form/form";
import { IInputGeneralProps } from ".";

export interface ISimpleTextInput extends IInputGeneralProps {}

export function SimpleTextInput({ storeKey, placehodler }: ISimpleTextInput) {
    const form = useFormContext();

    const fieldValue: string = form.getInputProps(storeKey).value;

    const setValue = (newValue: string) => {
        form.setFieldValue(storeKey, newValue);
    };

    return (
        <>
            <TextInput
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(event.currentTarget.value)
                }
                value={fieldValue}
                placeholder={placehodler}
            />
        </>
    );
}
