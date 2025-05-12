import { FC, ReactNode } from 'react';
import { Sidebar } from './Sidebar_temp';
import { TopBar } from './TopBar_temp';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 max-w-[1300px] mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
};