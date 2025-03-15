"use client";
import { REPORT_VIEWS_URL } from "@/lib/utils";
import React, { useEffect } from "react";

export default function ReportViews({
  slug,
  title,
  category,
}: {
  slug: string;
  title: string;
  category: string;
}) {
  useEffect(() => {
    const postData = async () => {
      try {
        await fetch(REPORT_VIEWS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            slug,
            title,
            category,
          }),
        });
      } catch (error) {
        console.error(error);
      }
    };

    postData();
  }, [slug, title, category]);

  return <></>;
}
