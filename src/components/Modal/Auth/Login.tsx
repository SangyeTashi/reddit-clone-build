import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/errors';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signInWithEmailAndPassword(loginForm.email, loginForm.password);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <form onSubmit={() => {}}>
            <Input
                required
                name="email"
                type="email"
                placeholder="email"
                onChange={onChange}
                fontSize="10pt"
                bg="gray.50"
                mb={2}
                _placeholder={{
                    color: 'gray.500',
                }}
                _focus={{
                    outline: 'none',
                }}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500',
                }}
            />
            <Input
                required
                name="password"
                type="password"
                placeholder="password"
                onChange={onChange}
                fontSize="10pt"
                bg="gray.50"
                mb={2}
                _placeholder={{
                    color: 'gray.500',
                }}
                _focus={{
                    outline: 'none',
                }}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500',
                }}
            />
            <Text>
                {FIREBASE_ERRORS[error?.message as keyof FIREBASE_ERRORS]}
            </Text>
            <Button type="submit" width="100%" height="36px" my={2}>
                Log In
            </Button>
            <Flex justify="center" align="center" fontSize="9pt">
                <Text mr={1}>New here?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: 'signup',
                        }))
                    }
                >
                    SIGN UP
                </Text>
            </Flex>
        </form>
    );
};
export default Login;
