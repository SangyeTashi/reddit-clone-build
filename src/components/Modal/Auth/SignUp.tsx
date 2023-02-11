import { authModalState } from '@/atoms/authModalAtom';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/errors';
import { Type } from 'typescript';

const SignUp: React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [signUpForm, setSignUpForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user, loading, userError] =
        useCreateUserWithEmailAndPassword(auth);
    // Firebase logic
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        if (signUpForm.password !== signUpForm.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <form onSubmit={handleOnSubmit}>
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
            <Input
                required
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
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

            <Text align="center" color="red" fontSize="10pt">
                {error ||
                    FIREBASE_ERRORS[
                        userError?.message as keyof typeof FIREBASE_ERRORS
                    ]}
            </Text>

            <Button
                type="submit"
                width="100%"
                height="36px"
                my={2}
                isLoading={loading}
            >
                Sign Up
            </Button>
            <Flex justify="center" align="center" fontSize="9pt">
                <Text mr={1}>Already a redditor?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: 'login',
                        }))
                    }
                >
                    LOG IN
                </Text>
            </Flex>
        </form>
    );
};
export default SignUp;
