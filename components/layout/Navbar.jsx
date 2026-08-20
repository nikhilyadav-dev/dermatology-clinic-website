// "use client";

// import { MenuIcon } from "lucide-react";
// import { Menu, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button, buttonVariants } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// export const Navbar = () => {
//   const features = [
//     {
//       title: "Hair",
//       description: "3 treatments · Hair Transplant",
//       href: "#",
//     },
//     {
//       title: "Injectables",
//       description: "3 treatments · Dermal Fillers",
//       href: "#",
//     },
//     {
//       title: "Lasers",
//       description: "6 treatments · MNRF Treatment",
//       href: "#",
//     },
//     {
//       title: "Peels",
//       description: "5 treatments · Chemical Peel",
//       href: "#",
//     },
//     {
//       title: "Regenerative",
//       description: "3 treatments · Exosomes Treatment",
//       href: "#",
//     },
//     {
//       title: "Surgery",
//       description: "2 treatments · Nail Surgery",
//       href: "#",
//     },
//   ];

//   const concerns = [
//     {
//       title: "Acne & Acne Scars",
//       description: "2 treatments · Chemical Peels",
//       href: "#",
//     },
//     {
//       title: "Pigmentation & Melasma",
//       description: "2 treatments · Cosmelan",
//       href: "#",
//     },
//     {
//       title: "Anti-Ageing & Wrinkles",
//       description: "3 treatments · Botox",
//       href: "#",
//     },
//     {
//       title: "Hair Loss & Thinning",
//       description: "3 treatments · PRP",
//       href: "#",
//     },
//     {
//       title: "Unwanted Hair",
//       description: "1 treatment · Laser Hair Reduction",
//       href: "#",
//     },
//     {
//       title: "Dull Skin & Brightening",
//       description: "2 treatments · Glutathione",
//       href: "#",
//     },
//   ];

//   const primaryCta = {
//     label: "Explore Treatments",
//     href: "/treatments",
//   };

//   return (
//     <header className="shadow-md sticky top-0 z-100 w-full border-b bg-background ">
//       <div className=" py-3 px-4 w-full min-h-21">
//         <nav className="flex items-center justify-between">
//           {/* Logo */}
//           <a href="#" className="flex items-center justify-between  gap-2">
//             <img
//               src="/shine_logo_cropped.png"
//               className="h-14 w-auto"
//               alt="shine skin care logo"
//             />
//             {/* <span className="text-lg font-semibold tracking-tighter font-heading"></span> */}
//             <span className="flex flex-col leading-none">
//               <span className="text-[15px] font-bold tracking-tight text-ink font-heading text-primary pb-0.5">
//                 Dr. Sugandh Gandhi
//               </span>
//               <span className="hidden sm:block text-[10px] font-semibold tracking-[0.18em] text-slate-400 uppercase mt-1.4">
//                 Dermatologist
//               </span>
//             </span>
//           </a>
//           {/* Desktop menu */}
//           <NavigationMenu className="hidden lg:block  ">
//             <NavigationMenuList className="flex justify-center items-center gap-4 ">
//               <NavigationMenuItem className="text-sm font-medium text-secondary text-heading ">
//                 <NavigationMenuLink
//                   href="#"
//                   className={`hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)] `}
//                 >
//                   Home
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="text-sm font-medium text-secondary text-heading">
//                 <NavigationMenuLink
//                   href="#"
//                   className={` hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)] `}
//                 >
//                   About
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="text-sm font-medium text-secondary text-heading">
//                 <NavigationMenuTrigger className="text-sm font-medium text-secondary text-heading hover:bg-hover-background hover:text-hover-foreground">
//                   Treatments
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className=" ">
//                   <div className="grid w-[600px] grid-cols-2 p-3 ">
//                     <div className="top col-span-full p-3 pt-4 pb-5  text-sm font-medium text-primary text-heading border-b">
//                       Browse by category · 26 treatments
//                     </div>
//                     {features.map((feature, index) => (
//                       <NavigationMenuLink
//                         href={feature.href}
//                         key={index}
//                         className="rounded-md p-3 mt-1.5 transition-colors hover:bg-hover-background hover:text-hover-foreground"
//                       >
//                         <div key={feature.title}>
//                           <p className="mb-1 font-medium text-secondary">
//                             {feature.title}
//                           </p>
//                           <p className="text-sm text-slate-500 text-heading">
//                             {feature.description}
//                           </p>
//                         </div>
//                       </NavigationMenuLink>
//                     ))}
//                     <div className="top col-span-full pl-3 pt-3 text-sm font-normal text-secondary text-heading border-t flex justify-between items-center gap-4 ">
//                       <span>26 Treatments In Total</span>
//                       <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-3 py-2 rounded-full text-sm font-medium">
//                         View All Treatments
//                       </button>
//                     </div>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="text-sm font-medium text-secondary text-heading">
//                 <NavigationMenuTrigger className="text-sm font-medium text-secondary text-heading hover:bg-hover-background hover:text-hover-foreground">
//                   Concerns
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className=" ">
//                   <div className="grid w-[600px] grid-cols-2 p-3 ">
//                     <div className="top col-span-full p-3 pt-4 pb-5  text-sm font-medium text-primary text-heading border-b">
//                       By concern · 12 in total
//                     </div>
//                     {concerns.map((feature, index) => (
//                       <NavigationMenuLink
//                         href={feature.href}
//                         key={index}
//                         className="rounded-md p-3 mt-1.5 transition-colors hover:bg-hover-background hover:text-hover-foreground"
//                       >
//                         <div key={feature.title}>
//                           <p className="mb-1 font-medium text-secondary">
//                             {feature.title}
//                           </p>
//                           <p className="text-sm text-slate-500 text-heading">
//                             {feature.description}
//                           </p>
//                         </div>
//                       </NavigationMenuLink>
//                     ))}
//                     <div className="top col-span-full pl-3 pt-3 text-sm font-normal text-secondary text-heading border-t flex justify-between items-center gap-4 ">
//                       <span>Every concern reviewed by a dermatologist</span>
//                       <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-3 py-2 rounded-full text-sm font-medium">
//                         View All Concerns
//                       </button>
//                     </div>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="text-sm font-medium text-secondary text-heading">
//                 <NavigationMenuLink
//                   href="#"
//                   className={` hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)] `}
//                 >
//                   Results
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="text-sm font-medium text-secondary text-heading">
//                 <NavigationMenuLink
//                   href="#"
//                   className={`hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)] `}
//                 >
//                   Gallery
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="text-sm font-medium text-secondary text-heading">
//                 <NavigationMenuLink
//                   href="#"
//                   className={`hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)] `}
//                 >
//                   Blog
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem className="text-sm font-medium text-secondary text-heading">
//                 <NavigationMenuLink
//                   href="#"
//                   className={`hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)] `}
//                 >
//                   Contact
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//           <div className="hidden items-center gap-4 lg:flex">
//             <motion.a
//               href={primaryCta.href}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               className="group flex items-center gap-2 rounded-full bg-[#DB2777] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#DB2777]/25 transition-colors hover:bg-[#c2185e]"
//             >
//               {primaryCta.label}
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//             </motion.a>
//           </div>
//           <Sheet>
//             {/* Mobile menu */}
//             <SheetTrigger
//               className={`${buttonVariants({ variant: "outline", size: "icon" })} lg:hidden group hover:bg-hover-background transition-colors cursor-pointer`}
//             >
//               <Menu
//                 className="h-6 w-6 text-secondary group-hover:text-hover-foreground transition-colors"
//                 strokeWidth={2.5}
//               />
//             </SheetTrigger>
//             <SheetContent side="top" className="max-h-screen overflow-auto">
//               <SheetHeader className="border-b">
//                 <SheetTitle>
//                   <a href="#" className="flex items-center  font-heading">
//                     <img
//                       src="/shine_logo_cropped.png"
//                       className="h-10 w-auto"
//                       alt="shine skin care logo"
//                     />
//                     {/* <span className="text-[15px] font-bold tracking-tight text-ink font-heading text-primary pb-0.5">
//                       Dr. Sugandh Gandhi
//                     </span> */}
//                     <span className="text-sm font-bold tracking-tight text-ink font-heading text-primary">
//                       Dr. Sugandh Gandhi
//                     </span>
//                   </a>
//                 </SheetTitle>
//               </SheetHeader>
//               <div className="flex flex-col pr-4 pl-4 pb-4 text-body">
//                 <div className="flex flex-col gap-6">
//                   <a href="#" className="font-medium">
//                     Home
//                   </a>
//                   <a href="#" className="font-medium">
//                     About
//                   </a>
//                   <Accordion type="single" collapsible className="">
//                     <AccordionItem
//                       value="solutions"
//                       className="border-none cursor-pointer"
//                     >
//                       <AccordionTrigger className="p-0 font-medium ">
//                         Treatments
//                       </AccordionTrigger>
//                       <AccordionContent>
//                         <div className="flex flex-wrap gap-2 p-1">
//                           {features.map((feature, index) => (
//                             <a
//                               key={index}
//                               href={feature.href}
//                               className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
//                             >
//                               {feature.title}
//                             </a>
//                           ))}
//                         </div>
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>

//                   <Accordion type="single" collapsible className="">
//                     <AccordionItem
//                       value="solutions"
//                       className="border-none cursor-pointer"
//                     >
//                       <AccordionTrigger className="p-0 font-medium ">
//                         Concerns
//                       </AccordionTrigger>
//                       <AccordionContent>
//                         <div className="flex flex-wrap gap-2 p-1">
//                           {features.map((feature, index) => (
//                             <a
//                               key={index}
//                               href={feature.href}
//                               className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
//                             >
//                               {feature.title}
//                             </a>
//                           ))}
//                         </div>
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>

//                   <a href="#" className="font-medium">
//                     Results
//                   </a>
//                   <a href="#" className="font-medium">
//                     Gallery
//                   </a>
//                   <a href="#" className="font-medium">
//                     Blog
//                   </a>
//                   <a href="#" className="font-medium">
//                     Content
//                   </a>
//                 </div>

//                 <div className="mt-6 flex flex-col gap-4">
//                   <a
//                     href="tel:+919619957525"
//                     class="flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-medium text-secondary"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-phone h-4 w-4 text-mint"
//                       aria-hidden="true"
//                     >
//                       <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
//                     </svg>{" "}
//                     +91 96199 57525
//                   </a>

//                   <Button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-6 rounded-full text-md font-medium">
//                     Book Appointment
//                   </Button>
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </nav>
//       </div>
//     </header>
//   );
// };

"use client";

import { Menu, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Shared class for every top-level link (Home, About, Results, Gallery, Blog, Contact)
// — one place to tune hover styling instead of repeating it 6 times.
const navLinkClass =
  "rounded-md px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)]";

// Shared class for Treatments/Concerns trigger — same visual language as navLinkClass
const navTriggerClass =
  "rounded-md px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)]";

// Shared class for items inside the mega-menu dropdown panels
const dropdownItemClass =
  "rounded-md p-3 transition-colors hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)] ";

export const Navbar = () => {
  const features = [
    { title: "Hair", description: "3 treatments · Hair Transplant", href: "#" },
    {
      title: "Injectables",
      description: "3 treatments · Dermal Fillers",
      href: "#",
    },
    {
      title: "Lasers",
      description: "6 treatments · MNRF Treatment",
      href: "#",
    },
    { title: "Peels", description: "5 treatments · Chemical Peel", href: "#" },
    {
      title: "Regenerative",
      description: "3 treatments · Exosomes Treatment",
      href: "#",
    },
    { title: "Surgery", description: "2 treatments · Nail Surgery", href: "#" },
  ];

  const concerns = [
    {
      title: "Acne & Acne Scars",
      description: "2 treatments · Chemical Peels",
      href: "#",
    },
    {
      title: "Pigmentation & Melasma",
      description: "2 treatments · Cosmelan",
      href: "#",
    },
    {
      title: "Anti-Ageing & Wrinkles",
      description: "3 treatments · Botox",
      href: "#",
    },
    {
      title: "Hair Loss & Thinning",
      description: "3 treatments · PRP",
      href: "#",
    },
    {
      title: "Unwanted Hair",
      description: "1 treatment · Laser Hair Reduction",
      href: "#",
    },
    {
      title: "Dull Skin & Brightening",
      description: "2 treatments · Glutathione",
      href: "#",
    },
  ];

  const primaryCta = { label: "Explore Treatments", href: "/treatments" };

  return (
    // FIX: min-h-21 and z-100 are not valid Tailwind classes (default scale
    // stops at h-96 for height and z-50 for z-index) — they were silently
    // doing nothing. min-h-20 (80px) is a real token; z-[60] is bracket
    // syntax for an arbitrary value, safely above dropdowns/sheets at z-50.
    <header className="sticky top-0 z-[60] w-full min-h-20 border-b bg-background shadow-md">
      <div className="w-full px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/shine_logo_cropped.png"
              className="h-11 w-auto md:h-14"
              alt="shine skin care logo"
            />
            <span className="flex flex-col leading-none mt-1">
              <span className="text-[13px] font-bold tracking-tight text-primary font-heading pb-0.5 md:text-[15px]">
                Dr. Sugandh Gandhi
              </span>
              <span className="hidden text-[10px] font-semibold tracking-[0.18em] text-slate-400 uppercase sm:block">
                Dermatologist
              </span>
            </span>
          </a>

          {/* Desktop menu */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="flex items-center justify-center gap-1 ">
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navLinkClass}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navLinkClass}>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navTriggerClass}>
                  Treatments
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    <div className=" border-b text-sm font-medium text-primary col-span-full p-3 pt-4 pb-5">
                      Browse by category · 26 treatments
                    </div>
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="rounded-md p-3 mt-1.5 transition-colors hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)]"
                      >
                        <div key={feature.title}>
                          <p className="mb-1 font-medium text-secondary">
                            {feature.title}
                          </p>
                          <p className="text-sm text-slate-500 text-heading">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                    <div className="col-span-full flex items-center justify-between gap-4 border-t p-3 pb-1 text-sm font-normal text-secondary">
                      <span>26 Treatments In Total</span>
                      <button className="rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/80">
                        View All Treatments
                      </button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navTriggerClass}>
                  Concerns
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-1 p-3 ">
                    <div className="col-span-full border-b p-3 pt-1 pb-4 text-sm font-medium text-primary">
                      By concern · 12 in total
                    </div>
                    {concerns.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="rounded-md p-3 mt-1.5 transition-colors hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)]"
                      >
                        <div key={feature.title}>
                          <p className="mb-1 font-medium text-secondary">
                            {feature.title}
                          </p>
                          <p className="text-sm text-slate-500 text-heading">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                    <div className="col-span-full flex items-center justify-between gap-4 border-t p-3 pb-1 text-sm font-normal text-secondary">
                      <span>Every concern reviewed by a dermatologist</span>
                      <button className="rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/80">
                        View All Concerns
                      </button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navLinkClass}>
                  Results
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navLinkClass}>
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navLinkClass}>
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navLinkClass}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA — explicit h-11 (44px) so it has a fixed, predictable
              size instead of growing/shrinking with its py value */}
          <div className="hidden lg:flex lg:items-center">
            <motion.a
              href={primaryCta.href}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-colors hover:bg-primary-hover font-heading"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          {/* Mobile trigger */}
          <Sheet>
            <SheetTrigger
              className={`${buttonVariants({ variant: "outline", size: "icon" })} group h-11 w-11 cursor-pointer transition-colors hover:bg-[var(--hover-background)] lg:hidden`}
            >
              <Menu
                className="h-6 w-6 text-secondary transition-colors group-hover:text-[var(--hover-foreground)]"
                strokeWidth={2.5}
              />
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader className="border-b">
                <SheetTitle>
                  <a href="#" className="flex items-center gap-2 font-heading">
                    <img
                      src="/shine_logo_cropped.png"
                      className="h-10 w-auto"
                      alt="shine skin care logo"
                    />
                    <span className="text-sm font-bold tracking-tight text-primary">
                      Dr. Sugandh Gandhi
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-4">
                {/* Tap targets: py-3 gives each row a real 44px+ touch area
                    instead of hugging the text at font-size alone */}
                <div className="flex flex-col gap-1">
                  <a
                    href="#"
                    className="rounded-md px-2 py-3 font-medium hover:bg-[var(--hover-background)]"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-2 py-3 font-medium hover:bg-[var(--hover-background)]"
                  >
                    About
                  </a>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="treatments" className="border-none">
                      <AccordionTrigger className="rounded-md px-2 py-3 font-medium hover:bg-[var(--hover-background)] hover:no-underline">
                        Treatments
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-wrap gap-2 p-1">
                          {features.map((feature, index) => (
                            <a
                              key={index}
                              href={feature.href}
                              className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                              {feature.title}
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="concerns" className="border-none">
                      <AccordionTrigger className="rounded-md px-2 py-3 font-medium hover:bg-[var(--hover-background)] hover:no-underline">
                        Concerns
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-wrap gap-2 p-1">
                          {concerns.map((feature, index) => (
                            <a
                              key={index}
                              href={feature.href}
                              className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                              {feature.title}
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <a
                    href="#"
                    className="rounded-md px-2 py-3 font-medium hover:bg-[var(--hover-background)]"
                  >
                    Results
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-2 py-3 font-medium hover:bg-[var(--hover-background)]"
                  >
                    Gallery
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-2 py-3 font-medium hover:bg-[var(--hover-background)]"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-2 py-3 font-medium hover:bg-[var(--hover-background)]"
                  >
                    Contact
                  </a>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="tel:+919619957525"
                    className="flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-medium text-secondary"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2.5} />
                    +91 96199 57525
                  </a>

                  <Button className="h-12 rounded-full bg-primary text-base font-medium text-primary-foreground hover:bg-primary/80">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};
