import { serializeJsonLd } from "@/lib/structured-data";

type StructuredDataProps = {
  data: object;
};

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
