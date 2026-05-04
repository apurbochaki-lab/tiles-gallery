"use client"

import { Avatar, Card } from '@heroui/react';
import React from 'react';
import { authClient } from '@/lib/auth-client';
import UpdateModal from '@/components/profilepage/UpdateModal';

const MyProfilePage = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user

    return (
        <div className='m-5 mb-50'>
            <h2 className='text-2xl font-bold text-center py-5'>Profile Page</h2>

            <Card className=' max-w-[500px] mx-auto text-center border-2 border-blue-300/30 shadow-md'>
                <Avatar size="lg" className='w-25 h-25 mx-auto'>
                    <Avatar.Image
                        alt="Large Avatar"
                        src={user?.image}
                        width={500}
                        height={500}
                        referrerPolicy='no-referrer'
                    />
                    <Avatar.Fallback className='text-2xl font-bold bg-blue-200'>{user?.name.split(" ")[0]}</Avatar.Fallback>
                </Avatar>
                <h2 className='text-lg font-semibold'>{user?.name}</h2>
                <h2 className='text-lg font-semibold text-muted'>{user?.email}</h2>

                <UpdateModal></UpdateModal>
            </Card>
        </div>
    );
};

export default MyProfilePage;