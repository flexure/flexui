// import { StyleDecorator } from "Flex/styled/Styled.decorator";
import { ButtonStyle } from "./style";
import { BaseButton, BaseButtonProps } from "@flexure/base-ui";

export const Button = BaseButton.decorate(ButtonStyle);
export type ButtonProps = BaseButtonProps;
