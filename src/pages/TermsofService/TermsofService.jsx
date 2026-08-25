import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function TermsofService() {
    const { t } = useTranslation();

    return (
        <Box sx={{ minHeight: "100vh", py: { xs: 6, md: 8 } }}>
            <Container maxWidth="md" sx={{ maxWidth: "760px !important" }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography variant="h3" sx={{fontWeight: 700, fontSize: { xs: "2rem", md: "2.5rem" },color: "text.primary",mb: 1,}}>
                        {t("Terms of Service")}
                    </Typography>

                    <Typography sx={{fontSize: "0.55rem",letterSpacing: 1,color: "text.secondary",textTransform: "uppercase",}}>
                        {t("EFFECTIVE DATE: OCTOBER 26, 2024")}
                    </Typography>
                </Box>

                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{fontWeight: 700,fontSize: "1rem",mb: 2,color: "text.primary",}}>
                        {t("Introduction")}
                    </Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "text.secondary",mb: 2,}}>{t('Welcome to REMIX. These Terms of Service ("Terms") govern your access to and use of the REMIX website, mobile applications, and bespoke services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.')}</Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "text.secondary",}}>{t("REMIX represents the pinnacle of editorial minimalism and luxury fashion. We curate an environment where discerning individuals can explore and acquire meticulously crafted garments. Your use of our platform must reflect the respect and integrity inherent in our brand ethos.")}</Typography>
                </Box>

                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{fontWeight: 700,fontSize: "1rem",mb: 2,color: "text.primary",}}>{t("Intellectual Property")}</Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "text.secondary",mb: 2,}}>{t("All content presented on the Services, including but not limited to, high-fashion product photography, text, graphics, logos, images, digital downloads, and software, is the exclusive property of REMIX Luxury Fashion or its content suppliers and protected by international copyright laws.")}</Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "text.secondary",}}>{t("The compilation of all content on this site is the exclusive property of REMIX. You are granted a limited, non-exclusive, non-transferable, and revocable license to access and make personal, non-commercial use of the Services. Any unauthorized reproduction, modification, distribution, or performance of any content is strictly prohibited.")}</Typography>
                </Box>

                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{fontWeight: 700,fontSize: "1rem",mb: 2,color: "text.primary",}}>{t("Purchases and Payments")}</Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "text.secondary",mb: 2,}}>{t("We accept various forms of payment as indicated on our checkout page. By submitting an order, you represent and warrant that you are authorized to use the designated payment method and authorize us to charge your order (including taxes, shipping, and handling) to that card.")}</Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "text.secondary",}}>{t("REMIX reserves the right to refuse or cancel any order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, or error in your order.")}</Typography>
                </Box>
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{fontWeight: 700,fontSize: "1rem",mb: 2,color: "text.primary",}}>
                        {t("Returns and Exchanges")}</Typography>
                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "text.secondary",mb: 2,}}>
                        {t("We maintain a stringent quality control process to ensure every garment meets our luxury standards. If you are not entirely satisfied with your purchase, returns and exchanges are accepted within 14 days of delivery, provided the item is unworn, unwashed, and retains all original tags and packaging.")}
                    </Typography>
                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "text.secondary",}}>
                        {t("Bespoke and archive items are considered final sale and are not eligible for return or exchange unless deemed defective by our artisans upon delivery.")}
                    </Typography>
                </Box>
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h6" sx={{fontWeight: 700,fontSize: "1rem",mb: 2,color: "text.primary",}}>
                        {t("Limitation of Liability")}
                    </Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "text.secondary",mb: 2,}}>
                        {t("To the fullest extent permitted by applicable law, REMIX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.")}
                    </Typography>

                    <Typography sx={{fontSize: "0.72rem",lineHeight: 1.8,color: "text.secondary",}}>
                        {t("In no event shall REMIX's aggregate liability for all claims related to the Services exceed the total amount paid by you to REMIX during the twelve (12) months preceding the claim.")}
                    </Typography>
                </Box>
                <Divider sx={{ my: 4 }} />
                <Box sx={{ textAlign: "center", py: 2 }}>
                    <Typography sx={{fontSize: "0.6rem",fontWeight: 600,letterSpacing: 1,color: "text.secondary",textTransform: "uppercase",}}>
                        {t("FOR INQUIRIES REGARDING THESE TERMS, PLEASE CONTACT LEGAL@REMIX.COM")}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
