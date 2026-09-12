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

const navLinkClass =
  "rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)]";

const navTriggerClass =
  "rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[var(--hover-background)] hover:text-[var(--hover-foreground)]";

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
  const secondaryCta = { label: "+91 9619957525", href: "#treatments" };

  return (
    <header className="sticky top-0 z-[60] w-full min-h-20  bg-background shadow-md">
      <div className="w-full px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/shine_logo_cropped.png"
              className="h-11 w-auto md:h-14"
              alt="shine skin care logo"
            />
            <span className="flex flex-col leading-none mt-2">
              <span className="text-[15px] font-bold tracking-tight text-primary font-heading pb-0.5 md:text-[15px]">
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
                <NavigationMenuLink href="/" className={navLinkClass}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className={navLinkClass}>
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
                          <p className="mb-1 font-medium text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-sm text-slate-500 text-heading">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                    <div className="col-span-full flex items-center justify-between gap-4 border-t p-3 pb-1 text-sm font-normal text-foreground">
                      <span>26 Treatments In Total</span>
                      <a
                        href="/treatments"
                        className="rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/80"
                      >
                        View All Treatments
                      </a>
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
                          <p className="mb-1 font-medium text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-sm text-slate-500 text-heading">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                    <div className="col-span-full flex items-center justify-between gap-4 border-t p-3 pb-1 text-sm font-normal text-foreground">
                      <span>Every concern reviewed by a dermatologist</span>
                      <a
                        href="/concerns"
                        className="rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/80"
                      >
                        View All Concerns
                      </a>
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
                <NavigationMenuLink href="/clinic" className={navLinkClass}>
                  Clinic
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/book-consultation"
                  className={navLinkClass}
                >
                  Book
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="blogsf" className={navLinkClass}>
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className={navLinkClass}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
                className="h-6 w-6 text-foreground transition-colors group-hover:text-[var(--hover-foreground)]"
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
                <div className="flex flex-col gap-1">
                  <a
                    href="/"
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

                  <Accordion type="single">
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
                              className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:text-white"
                            >
                              {feature.title}
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single">
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
                              className="rounded-full hover:text-white transition-colors bg-primary/5 px-4 py-2 text-sm font-medium text-primary "
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
                  <motion.a
                    href={secondaryCta.href}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className=" border-[#241C24]/15 bg-white px-8 py-3 text-sm font-semibold font-heading transition-colors hover:bg-[#241C24]/[0.03] flex h-12 items-center justify-center gap-2 rounded-full border  text-foreground"
                  >
                    {secondaryCta.label}
                  </motion.a>

                  <motion.a
                    href={primaryCta.href}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex items-center gap-2  px-8 py-3 text-sm   shadow-lg shadow-[#DB2777]/25 transition-colors hover:bg-primary-hover font-heading h-12 rounded-full bg-primary  font-medium text-primary-foreground justify-center "
                  >
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </motion.a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};
