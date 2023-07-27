import { Box, Paper, Typography, Divider, IconButton, BoxProps } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useNavigate } from "react-router-dom";

type BoxMainProps = {
    title: string;
    children: React.ReactNode;
    toolbar?: React.ReactNode;
    footer?: React.ReactNode;
    goBack?: boolean;
} & BoxProps;

export function BoxMain({ title, toolbar, children, footer, goBack, ...props }: BoxMainProps) {
    const navigate = useNavigate();

    return (
        <Box margin={3} padding={2} flexDirection='column' component={Paper} gap={1} {...props}>
            <Box paddingX={1} display='flex' alignItems='center' gap={1}>
                {goBack && (
                    <IconButton
                        sx={{ padding: 0 }}
                        color='primary'
                        component='span'
                        onClick={() => {
                            navigate(-1);
                        }}>
                        <ArrowCircleLeftOutlinedIcon />
                    </IconButton>
                )}
                <Typography
                    overflow='hidden'
                    whiteSpace='nowrap'
                    textOverflow='ellipses'
                    textTransform='uppercase'
                    fontWeight={500}>
                    {title}
                </Typography>
            </Box>

            <Divider />

            {toolbar && <> {toolbar} </>}

            <Box flex={1} padding={1} overflow='auto'>
                {children}
            </Box>

            {footer && <> {footer} </>}
        </Box>
    );
}
