import { Block } from "payload";

export const Workshop: Block = {
  slug: "workshop",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
  interfaceName: "WorkshopBlock",
}