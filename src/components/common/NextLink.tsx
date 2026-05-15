"use client";

import NextJsLink from "next/link";
import { forwardRef } from "react";

type NextLinkProps = React.ComponentPropsWithoutRef<typeof NextJsLink>;

const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(function NextLink(
  { href, ...rest },
  ref,
) {
  return <NextJsLink ref={ref} href={href} {...rest} />;
});

export default NextLink;
