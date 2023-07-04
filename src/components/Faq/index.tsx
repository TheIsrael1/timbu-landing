import { CollectionEntry } from "astro:content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";

interface IFaq {
  data: CollectionEntry<"faq">[];
}

const Faq = ({ data }: IFaq) => {
  return (
    <div className="flex flex-col ">
      <h5 className="text-secondary-2 text-[3rem] leading-[4rem] -tracking-[0.04688rem] mb-[1.5rem]">
        FAQ
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[9.38rem]">
        {data?.map((i, idx) => (
          <Accordion key={idx} type="single" collapsible>
            <AccordionItem value={i?.slug}>
              <AccordionTrigger>
                <span className="text-secondary-15 text-start leading-[1.5rem]">
                  {i?.data?.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-secondary-15">{i?.data?.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
