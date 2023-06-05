import { Flex } from "@mantine/core";
import { SimpleTextInput } from "../Inputs/SimpleTextInput";
import { SimpleText } from "../Text.tsx/SimpleText";
import { IRowGeneralProps } from ".";

export interface ISimpleTextRow extends IRowGeneralProps {}

export const SimpleTextRow = ({
    title = "",
    storeKey = "",
    placehodler = "",
    redAsteriks = false,
}: ISimpleTextRow) => {
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
            <SimpleTextInput storeKey={storeKey} placehodler={placehodler} />
        </Flex>
    );
};
