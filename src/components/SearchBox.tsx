import { useState } from 'react';
import { Icon, Button,VStack, InputGroup, InputLeftElement, Input, Flex, Box, Spacer } from "@yamada-ui/react";
import { FaSearch } from 'react-icons/fa';

export const SearchBox = () => {
    const [text, setText] = useState("");

    const submit = () => {
        console.log(text);
    }

    return (
        <Box position="relative" top={4} left={"10vw"} zIndex={1002} backgroundColor="white" borderRadius={20} padding={2} w="50%">
            <Flex gap={4}  justifyContent="space-between">
                <VStack>
                    <InputGroup>
                        <InputLeftElement>
                            <Icon as={FaSearch} color="gray.300" />
                        </InputLeftElement>

                        <Input
                            type="text"
                            value={text}
                            onChange={(e) => { setText(e.target.value) }}
                            placeholder="検索"
                            focusBorderColor="green.500"
                            errorBorderColor="orange.500"
                        />
                    </InputGroup>
                </VStack>
                <Button colorScheme="primary" variant="solid" onClick={submit}>検索</Button>
            </Flex>
        </Box>
    );
}