"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "./icons";
import { ThemeToggle } from "./ui/ThemeToggle";
import { POSTS } from "@/lib/constants";

export function Nav() {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between pt-10 z-50 mx-1 md:mx-0"
      )}
    >
      <Link href={"/"}>
        <div className="flex items-center justify-between group">
          <Icons.orbit className="w-6 h-6 group-hover:animate-spin mr-2" />
          <p className="font-title font-bold text-lg">Luiz Carneiro</p>
        </div>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:cursor-pointer">
              Posts
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {POSTS.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center justify-between w-20 transition-all">
        <ThemeToggle />
        <Link href="/rss" aria-label="RSS Feed">
          <Icons.rss className="w-6 h-6 hover:bg-accent hover:text-accent-foreground transition-all hover:-translate-y-1" />
          <span className="sr-only">RSS Feed</span>
          {/* <Icons.rss className="w-6 h-6 p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-all" /> */}
        </Link>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent light:hover:bg-gray-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 pt-2 dark:text-white text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
