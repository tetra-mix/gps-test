import { Container,  Heading, Button, VStack, Spacer } from "@yamada-ui/react";


const Form = () => {
    return (
        <Container>
            <VStack>
                <Heading as="h1">フォーム</Heading>
                <Button as={"a"} href="/gps-test/form/add/" colorScheme="primary" >データを追加</Button>
                <Button as={"a"} href="/gps-test/form/reset/" colorScheme="primary">データをリセット</Button>
                <Spacer />
                <Button as={"a"} href="/gps-test/" colorScheme="secondary">Mapへ</Button>
            </VStack>
        </Container>
    )
}

export default Form