import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const OAuthButtons: React.FC = () => {
    return (
        <Flex flexDirection="column" width="100%" experimental_spaceY={2}>
            <Button variant="oauth">
                <Image src="/images/googlelogo.png" mr={4} height="20px" />
                Continue with google
            </Button>
            <Button variant="oauth">Some other provider</Button>
        </Flex>
    );
};
export default OAuthButtons;
