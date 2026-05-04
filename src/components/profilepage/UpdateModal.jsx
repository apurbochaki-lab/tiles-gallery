"use client"

import { authClient } from '@/lib/auth-client';
import { Person, PencilToSquare } from '@gravity-ui/icons';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const UpdateModal = () => {

    const handleUpdateForm = async(e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({
            name,
            image
        })
    }

    return (
        <Modal>
            <Button variant="secondary" className="mx-auto font-semibold"><PencilToSquare /> Update Profile Info</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Person className="size-5" />

                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Change your information bellow to update your profile info :
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleUpdateForm} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" name='name'/>
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>Profile Img URL</Label>
                                        <Input placeholder="Profile img URL" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" variant="secondary" type='submit'>Update Info</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateModal;