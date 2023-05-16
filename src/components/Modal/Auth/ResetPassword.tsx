import { Button, Flex, Icon, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { BsReddit } from 'react-icons/bs';
type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
    return (
        <Flex direction={'column'} justify="stretch" alignItems={'center'}>
            <Icon as={BsReddit} color="brand.100" fontSize={40} mb="2" />
            <Text align={'center'} fontSize="sm" mb={'3'}>
                Enter the email associated with your account and we'll send a
                reset link.
            </Text>
            <form action="submit">
                <Input placeholder="email" mb={'3'} type={'email'} />
                <Button width={'100%'}>Reset Password</Button>
            </form>
            
        </Flex>
    );
};
export default ResetPassword;
