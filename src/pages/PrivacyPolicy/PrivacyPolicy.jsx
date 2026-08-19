import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <Box sx={{minHeight: "100vh",py: { xs: 6, md: 8 },}}>
            <Container maxWidth="md" sx={{maxWidth: "760px !important",}}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700,fontSize: { xs: "2rem", md: "2.5rem" },color: "text.primary",mb: 1,}}>
                        {t("Privacy Policy")}
                    </Typography>

                    <Typography sx={{ fontSize: "0.55rem",letterSpacing: 1,color: "text.secondary",textTransform: "uppercase", }}>
                        {t("LAST UPDATED: OCTOBER 20, 2024")}
                    </Typography>
                </Box>
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700,fontSize: "1rem",mb: 2, }}>
                        {t("Introduction")}
                    </Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "#555",mb: 2,}}>
                        {t("At REMIX, we recognize that discretion and security are paramount to our clientele. This Privacy Policy outlines how we collect, use, and protect your personal information.")}
                    </Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "#555",}}>
                        {t(  "This document applies to all interactions with REMIX LUXURY, including our bespoke tailoring services, digital services, and related collections.")}
                    </Typography>
                </Box>

                <Divider sx={{ mb: 5 }} />

                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700,fontSize: "1rem",mb: 2,}}>
                        {t("Information We Collect")}
                    </Typography>

                    <Typography sx={{ fontSize: "0.72rem",lineHeight: 1.8,color: "#555",mb: 2,}}>
                        {t("To curate a tailored experience, we systematically gather information that identifies, relates to, or could reasonably be linked to you.")}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                        <Typography component="li" sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "#555",}}>
                            {t("Identity Data: Name, address, preferred salutations, and bespoke sizing profiles.")}
                        </Typography>

                        <Typography component="li" sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "#555",}}>
                            {t("Contact Data: Email address, delivery coordinates, email addresses, and phone contact numbers.")}
                        </Typography>

                        <Typography component="li" sx={{ fontSize: "0.72rem", lineHeight: 1.8, color: "#555",}}>
                            {t("Financial Data: Encrypted payment mechanisms and transaction history necessary for fulfillment.")}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700,fontSize: "1rem",mb: 2,}}>
                        {t("How We Use Your Data")}
                    </Typography>

                    <Typography sx={{ fontSize: "0.72rem",lineHeight: 1.8,color: "#555",mb: 2,}}>
                        {t("The intelligence we gather is deployed strictly to elevate your relationship with REMIX. We do not engage in the commodification of your personal narrative. Your data empowers us to:")}
                    </Typography>

                    <Box sx={{p: 2.5,borderRadius: 1,}}>
                        <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "#555",mb: 1,}}>
                            {t("Process and deliver our exclusive collections and bespoke commissions with absolute precision.")}
                        </Typography>

                        <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "#555",mb: 1,}}>
                            {t("Anticipate your aesthetic preferences to offer intimate private fittings and early access to archival releases.")}
                        </Typography>

                        <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "#555",}}>
                            {t("Maintain the security and integrity of our digital ecosystem, preventing fraudulent engagements.")}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700,fontSize: "1rem",mb: 2,}}>
                        {t("Cookies & Analytics")}
                    </Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "#555", }}>
                        {t("Our digital gallery employs minimal, strictly necessary cookies to ensure seamless navigation. We utilize sophisticated, anonymized insights to understand broader interaction patterns without compromising individual identities. You retain full autonomy over non-essential tracking via your browser preferences.")}
                    </Typography>
                </Box>

                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700,fontSize: "1rem",mb: 2,}}>
                        {t("Third-Party Sharing")}
                    </Typography>

                    <Typography sx={{ fontSize: "0.72rem", lineHeight: 1.8, color: "#555",}}>
                        {t("REMIX operates within a highly vetted network of artisans, logistics partners, and security infrastructure providers. We transmit necessary data exclusively to those entities under strict confidentiality agreements. We categorically refuse to sell your information to external marketing conglomerates.")}
                    </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700,fontSize: "1rem",mb: 2,}}>
                        {t("Contact Us")}
                    </Typography>

                    <Typography
                        sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "#555",mb: 2,}}>
                        {t("Should you require clarification regarding this policy, or wish to exercise your data sovereignty rights, our dedicated concierge is at your disposal.")}
                    </Typography>

                    <Typography sx={{fontSize: "0.7rem",fontWeight: 600,letterSpacing: 1,color: "text.primary",}}>
                        PRIVACY@REMIX.COM
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}