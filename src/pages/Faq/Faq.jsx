import React, { useState } from "react";
import { Box, Typography, Container, Divider, Accordion, AccordionSummary, AccordionDetails, } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const FAQ_CATEGORIES = [
    {
        id: "shipping",
        title: "Shipping & Returns",
        items: [
            {
                q: "Do you offer international shipping?",
                a: "Yes, we provide complimentary worldwide express shipping on all orders over $300. Orders are handled by premium couriers and include full tracking and signature confirmation upon delivery.",
            },
            {
                q: "What is your return and exchange policy?",
                a: "We accept returns and exchanges on unworn, unwashed items with original tags attached within 14 days of delivery. Returns can be initiated through your account or by contacting our concierge team.",
            },
            {
                q: "How long does standard delivery take?",
                a: "Domestic deliveries typically arrive within 2 to 4 business days. International orders generally arrive within 3 to 7 business days depending on customs clearance.",
            },
        ],
    },
    {
        id: "bespoke",
        title: "Bespoke Services",
        items: [
            {
                q: "How do I schedule a bespoke consultation?",
                a: "You can schedule a private fitting appointment through our Contact page or by emailing our concierge team. Consultations are available both in our flagship boutiques and virtually.",
            },
            {
                q: "What is the timeline for custom tailoring?",
                a: "Our bespoke creations typically require 4 to 6 weeks from initial measurements to final delivery, ensuring artisanal perfection and precise fit.",
            },
            {
                q: "Can I customize materials and silhouettes?",
                a: "Yes, our master tailors work with exclusive archival fabrics, organic fibers, and premium conscious leathers tailored specifically to your preferences.",
            },
        ],
    },
    {
        id: "orders",
        title: "Orders & Payments",
        items: [
            {
                q: "What payment methods are accepted?",
                a: "We accept Visa, MasterCard, American Express, Apple Pay, and Cash on Delivery for eligible regions. All digital transactions are securely encrypted.",
            },
            {
                q: "Can I modify or cancel an order after placing it?",
                a: "Orders can be modified or canceled within 2 hours of placement. After this window, the processing phase begins, and changes can no longer be guaranteed.",
            },
            {
                q: "How can I track my order status?",
                a: "Once your order is dispatched, you will receive a confirmation email with a direct tracking link. You can also view live status updates under your Profile Orders tab.",
            },
        ],
    },
    {
        id: "care",
        title: "Product Care",
        items: [
            {
                q: "How should I care for luxury organic fabrics?",
                a: "We recommend gentle dry cleaning or cold hand washing with eco-friendly detergents. Avoid tumble drying and direct sunlight when drying to preserve fabric longevity.",
            },
            {
                q: "Do you offer lifetime repair services?",
                a: "Through our Lifecycle initiative, we provide meticulous restoration and repair services for genuine REMIX garments to extend their lifespan indefinitely.",
            },
            {
                q: "How should leather goods be stored?",
                a: "Store leather pieces in the provided breathable dust bag in a cool, dry place away from direct heat sources and artificial light.",
            },
        ],
    },
];

export default function Faq() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("shipping");
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const currentCategory =
        FAQ_CATEGORIES.find((cat) => cat.id === activeTab) || FAQ_CATEGORIES[0];

    return (
        <Box sx={{ minHeight: "85vh", py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg" sx={{ maxWidth: "1050px !important" }}>
                <Box sx={{ textAlign: "center", mb: { xs: 6, md: 9 } }}>
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 800, fontSize: { xs: "2rem", sm: "2.5rem", md: "2.9rem" }, color: "text.primary", letterSpacing: "-0.02em", mb: 2, }} >
                        {t("Frequently Asked Questions")}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "0.85rem", md: "0.95rem" }, color: "text.secondary", maxWidth: 580, mx: "auto", lineHeight: 1.6, }}>
                        {t("Explore our curated guide to the Remix experience. Should you require further assistance, our concierge is at your service.")}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 4, md: 8 }, alignItems: "flex-start", }}>
                    <Box sx={{ width: { xs: "100%", md: 240 }, flexShrink: 0, display: "flex", flexDirection: { xs: "row", md: "column" }, gap: { xs: 2.5, md: 2 }, overflowX: { xs: "auto", md: "visible" }, pb: { xs: 1.5, md: 0 }, borderBottom: { xs: "1px solid", md: "none" }, borderColor: "divider", }}>
                        {FAQ_CATEGORIES.map((cat) => {
                            const isActive = activeTab === cat.id;
                            return (
                                <Box key={cat.id} onClick={() => { setActiveTab(cat.id); setExpanded(false); }} sx={{ cursor: "pointer", position: "relative", pb: 1, whiteSpace: "nowrap", transition: "all 0.2s ease", }}>
                                    <Typography sx={{ fontSize: "0.88rem", fontWeight: isActive ? 700 : 500, color: isActive ? "text.primary" : "text.secondary", transition: "color 0.2s ease", "&:hover": { color: "text.primary", }, }}>
                                        {t(cat.title)}
                                    </Typography>
                                    {isActive && (<Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", bgcolor: "text.primary", }} />)}
                                </Box>
                            );
                        })}
                    </Box>
                    <Box sx={{ flex: 1, width: "100%" }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.15rem", color: "text.primary", mb: 2, }}> {t(currentCategory.title)} </Typography>
                        <Divider sx={{ mb: 2, borderColor: "divider" }} />
                        <Box>
                            {currentCategory.items.map((item, index) => {
                                const panelId = `panel-${currentCategory.id}-${index}`;
                                return (
                                    <Accordion key={panelId} expanded={expanded === panelId} onChange={handleAccordionChange(panelId)} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: "1px solid", borderColor: "divider", "&:before": { display: "none" }, }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "text.primary", fontSize: "1.2rem", }} />}
                                            sx={{ px: 0, py: 1, "& .MuiAccordionSummary-content": { my: 1, }, }}>
                                            <Typography sx={{ fontSize: "0.92rem", fontWeight: 600, color: "text.primary", }} >
                                                {t(item.q)}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ px: 0, pt: 0, pb: 2.5 }}>
                                            <Typography sx={{ fontSize: "0.82rem", lineHeight: 1.8, color: "text.secondary", }} >
                                                {t(item.a)}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
