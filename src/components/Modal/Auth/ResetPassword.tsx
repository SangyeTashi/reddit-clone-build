import { Button, Flex, Icon, Input, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { BsReddit } from 'react-icons/bs';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);

    async function handlePasswordReset() {
        const success = await sendPasswordResetEmail(email);
        if (success) setIsSent(true);
    }
    return (
        <Flex direction={'column'} justify="stretch" alignItems={'center'}>
            <Icon as={BsReddit} color="brand.100" fontSize={40} mb="2" />
            {isSent ? (
                <Text>Please check your email</Text>
            ) : (
                <>
                    <Text align={'center'} fontSize="sm" mb={'3'}>
                        Enter the email associated with your account and we'll
                        send a reset link.
                    </Text>

                    <form onSubmit={handlePasswordReset}>
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                            mb={'3'}
                            type={'email'}
                        />
                        {error && <Text>{error.message}</Text>}
                        <Button
                            type="submit"
                            isLoading={sending}
                            width={'100%'}
                        >
                            Reset Password
                        </Button>
                    </form>
                </>
            )}
        </Flex>
    );
};
export default ResetPassword;
