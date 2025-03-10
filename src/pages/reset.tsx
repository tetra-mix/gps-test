import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, Input, Center, Container, Box, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from '@yamada-ui/react';


type Data = {
    id: string;
}

const Reset = () => {
    const [error, setError] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Data>()


    const onSubmit: SubmitHandler<Data> = (data: Data) => {
        fetch("/api/reset/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((res) => {
                console.log("Success", res);
                setMessage(res);
            })
            .catch((error) => {
                console.error("Error:", error);
                setError(error);
            });
    }

    return (
        <Container>
            {
                error != "" &&
                <Center pt={"lg"}>
                    <Box>
                        <Alert status="error" variant="subtle" w="100%">
                            <AlertIcon />
                            <AlertTitle>エラー：</AlertTitle>
                            <AlertDescription>
                                {error}
                            </AlertDescription>
                        </Alert>
                    </Box>
                </Center>
            }
            {
                message != "" &&
                <Center pt={"lg"}>
                    <Box>
                        <Alert status="success" variant="subtle" w="100%">
                            <AlertIcon />
                            <AlertTitle>成功：</AlertTitle>
                            <AlertDescription>
                                {error}
                            </AlertDescription>
                        </Alert>
                    </Box>
                </Center>
            }
            <Center>
                <Box w="50%" as="form" onSubmit={handleSubmit(onSubmit)}>
                    <FormControl
                        required
                        invalid={!!errors.id}
                        label="ID"
                        errorMessage={errors.id ? errors.id.message : undefined}
                        pt={"lg"}
                    >
                        <Input
                            type="text"
                            placeholder="デバイス名(ID)"
                            {...register("id", {
                                required: { value: true, message: "デバイス名(ID)が必要です。" },
                            })}
                        />
                    </FormControl>

                    <Center pt={"lg"}>
                        <Button type="submit" colorScheme="secondary">送信</Button>
                    </Center>

                </Box>
            </Center>
            <Box>
                <Center pt={"lg"}>
                    <Button as="a" href="/gps-test/form/" colorScheme="primary">戻る</Button>
                </Center>
            </Box>

        </Container>
    )
}

export default Reset;