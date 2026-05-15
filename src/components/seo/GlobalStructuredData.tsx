import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { buildGlobalGraph } from "@/lib/structured-data";
import StructuredData from "./StructuredData";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export default function GlobalStructuredData({ dict, locale }: Props) {
  return <StructuredData data={buildGlobalGraph(dict, locale)} />;
}
