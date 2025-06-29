import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Order/accordion";
import {
  Select,
  SelectLabel,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Order/select";
import { Input } from "../Order/input";
import { Envelope, Map, User } from "@mynaui/icons-react";

const sections = [
  {
    id: "1",
    icon: <User className="size-4 stroke-2 text-muted-foreground" />,
    title: "Personal Information",
    children: (
      <div className="flex flex-col gap-2">
        <Input className="!p-3" type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
      </div>
    ),
  },
  {
    id: "2",
    icon: <Envelope className="size-4 stroke-2 text-muted-foreground" />,
    title: "Contact Information",
    children: (
      <div className="flex flex-col gap-2">
        <Input type="tel" placeholder="Phone" />
      </div>
    ),
  },
  {
    id: "3",
    icon: <Map className="size-4 stroke-2 text-muted-foreground" />,
    title: "Address Information",
    children: (
      <div className="flex flex-col gap-2">
        <Select className="w-full">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your hostel" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Boys Hostels</SelectLabel>
              <SelectItem value="h1">
                Netaji Subhas Chandra Bose Hall of Residence (Hall 1)
              </SelectItem>
              <SelectItem value="h2">
                Jagdish Chandra Bose Hall of Residence (Hall 2)
              </SelectItem>
              <SelectItem value="h3">
                Rabindra Nath Tagore Hall of Residence (Hall-3)
              </SelectItem>
              <SelectItem value="h4">
                C V Raman Hall of Residence (Hall-4)
              </SelectItem>
              <SelectItem value="h5">
                Swami Vivekananda Hall of Residence (Hall-5)
              </SelectItem>
              <SelectItem value="h9">
                Satyendra Nath Bose Hall of Residence (Hall-9)
              </SelectItem>
              <SelectItem value="h11">
                Meghnad Saha Hall of Residence (Hall-11)
              </SelectItem>
              <SelectItem value="h12">
                A.P.J. Abdul Kalam International Hostel (Hall-12)
              </SelectItem>
              <SelectItem value="h14">
                Dr B. R. Ambedkar Hall of Residence (Hall-14)
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Girls Hostels</SelectLabel>
              <SelectItem value="na">Not Applicable</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    ),
  },
];

export default function FormSectionAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {sections.map((section) => (
        <AccordionItem className="!p-3" key={section.id} value={section.id}>
          <AccordionTrigger className="group">
            <div className="!p-1 flex items-center gap-2">
              {section.icon}
              <span>{section.title}</span>
              {section.isComplete && (
                <span className="ml-2 text-sm text-green-500">✓</span>
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent className="!p-2">
            {section.children}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
