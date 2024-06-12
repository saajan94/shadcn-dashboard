import DashboardCard from "@/components/dashboard/DashboardCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import PostsTable from "@/components/posts/PostsTable";
import { Newspaper, Folder, User, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={40} />}
        />
        <DashboardCard
          title="Categories"
          count={11}
          icon={<Folder className="text-slate-500" size={40} />}
        />
        <DashboardCard
          title="Users"
          count={450}
          icon={<User className="text-slate-500" size={40} />}
        />
        <DashboardCard
          title="Comments"
          count={3000}
          icon={<MessageCircle className="text-slate-500" size={40} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}
