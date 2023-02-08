import { AuthModalState, authModalState } from '@/atoms/authModalAtom';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModal: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);

    function handleClose() {
        setModalState((prev: AuthModalState) => ({
            ...prev,
            open: false,
        }));
    }
    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent py={4}>
                    <ModalHeader textAlign="center" fontWeight={700}>
                        {modalState.view === 'login' && 'Log In'}
                        {modalState.view === 'signup' && 'Sign up'}
                        {modalState.view === 'resetPassword' &&
                            'Reset Password'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        width="70%"
                        mx="auto"
                        experimental_spaceY={3}
                    >
                        <OAuthButtons />
                        <Text fontWeight={700} color="gray.400">
                            OR
                        </Text>
                        <AuthInputs />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AuthModal;
