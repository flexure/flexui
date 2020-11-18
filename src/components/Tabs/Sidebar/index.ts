// import React from "react";
import { StyleSidebar } from "./Sidebar.style";
import { BaseTab, BaseTabs } from "@flexure/base-ui";

const Sidebar = BaseTabs.decorate(StyleSidebar);

export { Sidebar, BaseTab as SidebarItem };
