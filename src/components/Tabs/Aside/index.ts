// import React from "react";
import { AsideStyle } from "./style";
import { BaseTab, BaseTabs } from "@flexure/base-ui";

const Aside = BaseTabs.decorate(AsideStyle);

export { Aside, BaseTab as AsideItem };
