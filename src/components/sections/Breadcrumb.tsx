import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import * as React from "react";

// Example usage: <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }]} />
interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, idx) => (
          <React.Fragment key={item.label}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <span>{item.label}</span>
              )}
            </BreadcrumbItem>
            {idx < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
