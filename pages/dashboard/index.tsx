import DashboardContainer from '@components/containers/Dashboard.container'
import SidebarMenu from "@components/ui/buttons/SidebarMenu";

const Dashboard = () => {
    return (
        <div className="min-h-[auto] w-full flex items-start bg-green-500">
            <DashboardContainer />
        </div>
    );
};

export default Dashboard;
