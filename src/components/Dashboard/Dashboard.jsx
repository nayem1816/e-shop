import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import DashboardCard from './DashboardCard/DashboardCard';

const Dashboard = () => {
    return (
        <div style={{ height: '100vh' }} className="flex">
            <div className="h-full hidden lg:block">
                <Sidebar />
            </div>
            <div className="w-full">
                <header className="py-5 flex px-3 bg-gray-50 dark:bg-gray-800 shadow-lg sticky top-0 z-50">
                    <DashboardHeader />
                </header>
                <div className="container mx-auto body py-5 flex px-3 my-5 rounded w-full">
                    <div className="grid grid-cols-4 gap-x-4 gap-y-12 w-full">
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
