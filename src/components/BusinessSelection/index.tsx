import { CollectionEntry } from "astro:content";

interface IBusinessSelection {
  businessTypes: CollectionEntry<"businessTypes">[];
  tools: CollectionEntry<"tools">[];
  // defined already
  bussinessType?: string;
}

const BusinessSelection = ({
  businessTypes,
  tools,
  bussinessType,
}: IBusinessSelection) => {
  return <div>BusinessSelection</div>;
};

export default BusinessSelection;
