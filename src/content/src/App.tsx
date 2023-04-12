import React from "react";
import AboutModule from "./modules/About/AboutModule";
import HomeModule from "./modules/Home/HomeModule";
import SettingsModule from "./modules/Settings/SettingsModule";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@extension/design-system";

function App() {
  return (
    <div
      id="browser-extension-template-app"
      style={{
        opacity: 0,
        transform: "translateX(120%)",
      }}
      className="fixed top-2 right-2 z-[9999] w-[500px] h-[500px] rounded-md bg-white shadow-2xl transition-all p-4 font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50"
    >
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <HomeModule />
        </TabsContent>
        <TabsContent value="settings">
          <SettingsModule />
        </TabsContent>
        <TabsContent value="about">
          <AboutModule />
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default App;
