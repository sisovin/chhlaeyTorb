import * as React from "react";

import { cn } from "@/lib/utils";

export function Breadcrumb({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("w-full flex", className)}
      aria-label="breadcrumb"
      {...props}
    />
  );
}

export function BreadcrumbList({
  className,
  ...props
}: React.OlHTMLAttributes<HTMLOListElement>) {
  return <ol className={cn("flex items-center gap-1", className)} {...props} />;
}

export function BreadcrumbItem({
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

export function BreadcrumbLink({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
        className
      )}
      {...props}
    />
  );
}

export function BreadcrumbSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("select-none text-muted-foreground", className)}
      {...props}
    >
      /
    </span>
  );
}
