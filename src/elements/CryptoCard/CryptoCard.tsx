import {
    Card,
    CloseButton,
    Container,
    Group,
    Loader,
    Text,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { useFormContext } from "../../form/form";

interface IResponseBody {
    Symbol: string;
    Price: string;
}

interface ICryptoCardProps {
    Symbol: string;
}

export const CryptoCard = ({ Symbol }: ICryptoCardProps) => {
    const [price, setPrice] = useState<string>("");
    const form = useFormContext();

    const intervalref = useRef<number | null>(null);

    const removeFromPairs = () =>
        form.setFieldValue(
            "pairs",
            form
                .getInputProps("pairs")
                .value.filter((element: string) => element !== Symbol)
        );

    const startInterval = () => {
        intervalref.current = window.setInterval(() => {
            fetch(`http://localhost:8765/api/trade?symbol=${Symbol}`, {
                method: "GET",
            })
                .then((response) => {
                    return response.json();
                })
                .then((body: IResponseBody) => {
                    const { Price } = body;
                    setPrice(Price?.replace(/0+$/g, "") || "");
                    console.log(Price);
                });
        }, 5000);
    };

    useEffect(() => {
        startInterval();
        console.log(`start fetch ${Symbol}`);
        return () => {
            if (intervalref.current !== null) {
                window.clearInterval(intervalref.current);
            }
        };
    }, []);

    return (
        <Card withBorder>
            <Group>
                <Text style={CenterText}>{Symbol?.toUpperCase?.()}</Text>{" "}
                <CloseButton
                    onClick={() => {
                        removeFromPairs();
                    }}
                />
            </Group>
            <Text style={CenterText}>{price || <Loader />}</Text>
        </Card>
    );
};

const CenterText: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
};
