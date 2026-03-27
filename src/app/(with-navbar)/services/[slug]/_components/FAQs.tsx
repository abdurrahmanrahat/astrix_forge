"use client";

import MyAccordionItem from "@/components/shared/Ui/MyAccordionItem";
import { Accordion } from "@/components/ui/accordion";
import { TFaq } from "@/types/service.type";
import { useState } from "react";

const FAQs = ({ faqs }: { faqs: TFaq[] }) => {
  const [openItem, setOpenItem] = useState("item-0");
  return (
    <div className="mt-8 rounded-md overflow-hidden border border-muted">
      <Accordion
        type="single"
        collapsible
        value={openItem}
        onValueChange={(value) => setOpenItem(value)}
        className="w-full"
      >
        {faqs.map((faq, index) => {
          const itemValue = `item-${index}`;
          const isOpen = openItem === itemValue;

          return (
            <MyAccordionItem
              key={itemValue}
              itemValue={itemValue}
              faq={faq}
              isOpen={isOpen}
            />
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQs;
