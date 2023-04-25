import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import React from 'react';

const OAuthButtons: React.FC = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <Flex flexDirection="column" width="100%">
            <Button
                variant="oauth"
                onClick={() => {
                    signInWithGoogle();
                }}
            >
                <Image src="/images/googlelogo.png" mr={4} height="20px" />
                Continue with google
            </Button>
            <Button variant="oauth">Some other provider</Button>
            {error && <Text>{error.message}</Text>}
        </Flex>
    );
};
export default OAuthButtons;
