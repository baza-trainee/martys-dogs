import type { Meta, StoryObj } from "@storybook/react";

import ContainerSupport from "./ContainerSupport";
import FinancialSupport from "./FinancialSupport";
import NonfinancialSupport from "./NonfinancialSupport";

const meta: Meta<typeof ContainerSupport> = {
 component: ContainerSupport,
}

export default meta;

type Story = StoryObj<typeof ContainerSupport>

export const Financial: Story = {
  render: (args) => (
    <ContainerSupport title={args.title} description={args.description} containerSupportClasses='financial' >
      <FinancialSupport/>
    </ContainerSupport>
  )
  
}

export const Nonfinancial: Story = {
  render: (args) => (
    <ContainerSupport title={args.title} description={args.description} containerSupportClasses="nonfinancial">
        <NonfinancialSupport/>
      </ContainerSupport>
  )
}