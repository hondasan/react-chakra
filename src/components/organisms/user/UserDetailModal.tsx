import { Stack, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose} = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent padding={6}>
                <ModalHeader>ユーザー詳細</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value="兄貴" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input value="Aniki Otoko" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>MAIL</FormLabel>
                            <Input value="kari@karinomail" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input value="090-1111-2222" isReadOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>

    );
});