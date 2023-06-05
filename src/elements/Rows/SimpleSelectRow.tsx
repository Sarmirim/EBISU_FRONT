import { Flex } from "@mantine/core";
import { SimpleText } from "../Text.tsx/SimpleText";
import {
    ISimpleSelectInput,
    SimpleSelectInput,
} from "../Inputs/SimpleSelectInput";
import { IRowGeneralProps } from ".";

export interface ISimpleNumberRow
    extends IRowGeneralProps,
        ISimpleSelectInput {}

export const SimpleSelectRow = ({
    title = "",
    storeKey = "",
    placehodler = "",
    dataKey = "",
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
            <SimpleSelectInput
                dataKey={dataKey}
                storeKey={storeKey}
                placehodler={placehodler}
            />
        </Flex>
    );
};
