import { authModalState } from '@/atoms/authModalAtom';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [signUpForm, setSignUpForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Firebase logic
    const onSubmit = () => {};

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm((prev) => ({
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
            <Button type="submit" width="100%" height="36px" my={2}>
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
