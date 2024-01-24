import React from "react";
import { Container, Box } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#e5e5e5",
          px: 8,
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default PageContainer;
