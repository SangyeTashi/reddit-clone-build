import { authModalState } from '@/atoms/authModalAtom';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import SignUp from '../SignUp';
import Login from './Login';

const AuthInputs: React.FC = () => {
    const { view } = useRecoilValue(authModalState);
    return (
        <Flex>
            {view === 'login' && <Login />}
            {view === 'signup' && <SignUp />}
        </Flex>
    );
};
export default AuthInputs;
