"use client";

import { useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { heroCampaigns } from "@/data/campaigns";
import { brand } from "@/theme/brand";

type CampaignItem = { title: string; description: string };
type Props = {
  learnMore: string;
  items: CampaignItem[];
};

const CARD_WIDTH = 366;

export default function HeroCampaignCarousel({ learnMore, items }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const offset = direction === "next" ? CARD_WIDTH + 16 : -(CARD_WIDTH + 16);
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <Box sx={{ position: "relative", mt: { xs: 4, md: 6 } }}>
      <IconButton
        aria-label="Previous campaign"
        onClick={() => scroll("prev")}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          left: -48,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "background.paper",
          boxShadow: 2,
          "&:hover": { bgcolor: "background.paper" },
        }}
      >
        <ChevronLeftIcon sx={{ color: `${brand.navy}33` }} />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          pb: 1,
          mx: { xs: -2, sm: 0 },
          px: { xs: 2, sm: 0 },
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {items.map((item, index) => {
          const campaign = heroCampaigns[index];
          return (
            <Card
              key={item.title}
              component="a"
              href={campaign.href}
              target="_blank"
              rel="noopener noreferrer"
              elevation={0}
              sx={{
                flex: `0 0 ${CARD_WIDTH}px`,
                width: CARD_WIDTH,
                scrollSnapAlign: "start",
                borderRadius: 1.5,
                overflow: "hidden",
                textDecoration: "none",
                color: "inherit",
                border: 1,
                borderColor: "divider",
                transition: "box-shadow 0.2s",
                "&:hover": { boxShadow: 4 },
              }}
            >
              <Box
                sx={{
                  height: 160,
                  overflow: "hidden",
                  bgcolor: "grey.100",
                }}
              >
                <Box
                  component="img"
                  src={campaign.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition:
                      "imagePosition" in campaign ? campaign.imagePosition : "center",
                    display: "block",
                  }}
                />
              </Box>
              <Box sx={{ p: 2.5, bgcolor: "grey.50" }}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: 60,
                  }}
                >
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {learnMore}
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>

      <IconButton
        aria-label="Next campaign"
        onClick={() => scroll("next")}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          right: -48,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "background.paper",
          boxShadow: 2,
          "&:hover": { bgcolor: "background.paper" },
        }}
      >
        <ChevronRightIcon sx={{ color: `${brand.navy}33` }} />
      </IconButton>
    </Box>
  );
}
