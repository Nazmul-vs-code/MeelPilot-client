import SideNavBar from '@/components/dashboard/SideNavBar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='md:flex min-h-screen'>
            <SideNavBar />
            <main className='flex-1 p-6'>
                {children}
            </main>
        </div>
    );
};

export default layout;