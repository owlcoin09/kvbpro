import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import NextLink from "@/components/common/NextLink";
import type { BreadcrumbItem } from "@/lib/structured-data";

type Props = {
  items: BreadcrumbItem[];
  ariaLabel: string;
};

export default function PageBreadcrumbs({ items, ariaLabel }: Props) {
  if (items.length < 2) return null;

  const lastIndex = items.length - 1;

  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 0 }}>
      <Breadcrumbs aria-label={ariaLabel} sx={{ color: "text.secondary" }}>
        {items.map((item, index) => {
          const isLast = index === lastIndex;
          if (isLast) {
            return (
              <Typography key={item.href} color="text.primary" variant="body2">
                {item.label}
              </Typography>
            );
          }
          return (
            <NextLink key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <Typography variant="body2" color="primary" sx={{ "&:hover": { textDecoration: "underline" } }}>
                {item.label}
              </Typography>
            </NextLink>
          );
        })}
      </Breadcrumbs>
    </Container>
  );
}
