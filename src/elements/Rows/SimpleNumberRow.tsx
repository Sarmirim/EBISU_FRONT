import { Flex } from "@mantine/core";
import { SimpleText } from "../Text.tsx/SimpleText";
import { SimpleNumberInput } from "../Inputs/SimpleNumberInput";
import { IRowGeneralProps } from ".";

export interface ISimpleNumberRow extends IRowGeneralProps {}

export const SimpleNumberRow = ({
    title = "",
    storeKey = "",
    placehodler = "",
    redAsteriks = false,
}: ISimpleNumberRow) => {
    return (
        <Flex
            w={"50%"}
            align={"center"}
            gap={"md"}
            justify={"space-between"}
            direction={"row"}
            wrap={"wrap"}
        >
            <SimpleText redAsteriks={redAsteriks} title={title} />
            <SimpleNumberInput storeKey={storeKey} placehodler={placehodler} />
        </Flex>
    );
};
