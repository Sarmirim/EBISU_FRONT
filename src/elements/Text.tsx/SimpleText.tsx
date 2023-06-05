import { Text } from "@mantine/core";

export interface ISimpleText {
    title: string;
    redAsteriks?: boolean;
}

export const SimpleText = ({ title = "" }: ISimpleText) => {
    return <Text>{title}</Text>;
};
