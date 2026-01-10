"use client";

import React, { useActionState } from "react";
import { Icons } from "./icons";
import { POSTS } from "@/lib/constants";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createSubscriber } from "@/lib/actions";
import { siteConfig } from "@/config/site";

function Footer() {
  const initinialState = { message: "", errors: {} };
  const [state, dispatch] = useActionState(createSubscriber, initinialState);

  const footerLinkStyles =
    "text-gray-700 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-300 hover:underline transition-all";

  const socialIconStyles =
    "w-6 h-6 text-gray-700 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-300 hover:-translate-y-1 transition-all";

  return (
    <footer className="bg-gray-200 py-8 dark:bg-gray-800 mt-10">
      <div className="container mx-auto px-6 md:px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href={"/"}>
                <div className="flex items-center space-x-2 group">
                  <Icons.orbit className="w-6 h-6 group-hover:animate-spin" />
                  <p className="font-title font-bold">Luiz Carneiro</p>
                </div>
              </Link>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              <span>- What do a punching bag and a cache have in common?</span>
              <br />
              <span>- They can both take a hit! 🥊</span>
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter profile"
              >
                <Icons.twitter className={socialIconStyles} />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github profile"
              >
                <Icons.gitHub className={socialIconStyles} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin profile"
              >
                <Icons.linkedin className={socialIconStyles} />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <section className="text-md font-normal">Blog</section>
            <ul className="space-y-2">
              {POSTS.map((post) => (
                <li key={`${post.title}_footer2`}>
                  <Link href={post.href} className={footerLinkStyles}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <section className="text-md font-normal">Links</section>
            <ul className="space-y-2">
              <li>
                <a href="mailto:luiz@carneiro.dev" className={footerLinkStyles}>
                  Contact
                </a>
              </li>
              {/* <li>
                <Link href="/terms-of-services" className={footerLinkStyles}>
                  Terms of Services
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className={footerLinkStyles}>
                  Privacy Policy
                </Link>
              </li> */}
              <li>
                <Link href="/sitemap.xml/" className={footerLinkStyles}>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <section className="text-md font-normal">Newsletter</section>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              Not sure what I will send you, but it will be good
            </p>
            <form action={dispatch}>
              <div className="flex space-x-2 md:flex-col md:gap-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="flex-1 dark:bg-black bg-white 
                  placeholder:text-gray-600
                  dark:placeholder:text-gray-200 text-black-900 dark:text-gray-200 focus:ring-0 focus:border-gray-300 dark:focus:border-gray-600 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm"
                  defaultValue=""
                  aria-describedby="email-error"
                  autoComplete="email"
                />
                <Button className="cursor-pointer md:max-w-[100px] md:self-end hover:scale-105 transition-all">
                  Subscribe!
                </Button>
              </div>
              <div
                id="email-error"
                aria-live="polite"
                aria-atomic="true"
                className="px-1"
              >
                {state?.errors?.email &&
                  state.errors.email.map((error) => (
                    <p key={error} className="text-red-500 text-sm mt-1">
                      {error}
                    </p>
                  ))}
                {!state?.errors?.email && (
                  <p className="text-green-500 text-sm mt-1">
                    {state?.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm dark:border-gray-600">
          <p className="font-title text-black dark:text-gray-100">
            &copy; {new Date().getFullYear()} Carneiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
