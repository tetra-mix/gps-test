import { Button } from '@yamada-ui/react';

export const  CircleButton = (props: { children: React.ReactNode, bottom: number, right: number, func: () => void }) => {
    return (
        <Button
            onClick={props.func}
            bottom={props.bottom}
            right={props.right}
            position="absolute"
            zIndex={1003}
            borderRadius={"full"}
            w={100}
            h={100}
            fontSize={20}
            textAlign="center"
            colorScheme="primary"
        >
            {props.children}
        </Button>
    );
}