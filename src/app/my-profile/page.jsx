import { Card, InfoIcon } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import { Person, PencilToSquare } from '@gravity-ui/icons';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const MyProfilePage = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-center py-5'>Profile Page</h2>

            <Card className='max-w-[500px] mx-auto text-center border-2 border-blue-300/30 shadow-md'>
                <Image src={logo} width={100} height={100} alt='logo' className='mx-auto shadow-md rounded-full'></Image>
                <h2 className='text-lg font-semibold'>Apurbo Chaki</h2>
                <h2 className='text-lg font-semibold text-muted'>apurbokumarchaki@gmail.com</h2>

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
                                        <form className="flex flex-col gap-4">
                                            <TextField className="w-full" name="name" type="text">
                                                <Label>Name</Label>
                                                <Input placeholder="Enter your name" />
                                            </TextField>
                                            <TextField className="w-full" name="email" type="email">
                                                <Label>Profile Img URL</Label>
                                                <Input placeholder="Profile img URL" />
                                            </TextField>

                                            <Modal.Footer>
                                                <Button slot="close" variant="secondary">
                                                    Cancel
                                                </Button>
                                                <Button slot="close" type='submit'>Send Message</Button>
                                            </Modal.Footer>
                                        </form>
                                    </Surface>
                                </Modal.Body>

                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </Card>
        </div>
    );
};

export default MyProfilePage;