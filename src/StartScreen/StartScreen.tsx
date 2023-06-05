import { Button, Container, Group, Stack } from "@mantine/core";
import { CryptoCard } from "../elements/CryptoCard/CryptoCard";
import { AddCryptoCard } from "../elements/AddCryptoCard/AddCryptoCard";
import { useForm } from "@mantine/form";
import { FormProvider, IForm } from "../form/form";
import { SimpleTextRow } from "../elements/Rows/SimpleTextRow";
import { SimpleNumberRow } from "../elements/Rows/SimpleNumberRow";
import { SimpleSelectRow } from "../elements/Rows/SimpleSelectRow";

export function StartScreen() {
    const form = useForm<IForm>({
        initialValues: {
            pairs: ["dogeusdt", "btcusdt"],
            firstname: "",
            textKey: "",
            numberKey: undefined,
            handbookData: ["Первый", "Второй"],
            handbookValue: "",
        },
    });

    const ArrayOfCards = () => {
        return form
            .getInputProps("pairs")
            .value.map((symbol: string, index: number) => {
                return <CryptoCard key={index} Symbol={symbol} />;
            });
    };

    return (
        <FormProvider form={form}>
            <form
                onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                    event.preventDefault()
                }
            >
                <Container size={"lg"}>
                    <Stack align="center" mt={50}>
                        <Container size="xl">
                            <Group>{ArrayOfCards()}</Group>
                        </Container>

                        <AddCryptoCard />

                        <SimpleTextRow
                            title="Имя"
                            storeKey="firstname"
                            placehodler="enter firstname"
                        />

                        <SimpleTextRow
                            title="Поле с текстом"
                            storeKey="textKey"
                            placehodler="текстовое значение"
                        />

                        <SimpleNumberRow
                            title="Поле с числом"
                            storeKey="numberKey"
                            placehodler="числовое значение"
                        />

                        <SimpleSelectRow
                            dataKey="handbookData"
                            title="Поле со справочником"
                            storeKey="handbookValue"
                            placehodler="Справочные значения"
                        />

                        <Button
                            onClick={() => {
                                console.log(form.values);
                            }}
                        />
                    </Stack>
                </Container>
            </form>
        </FormProvider>
    );
}
