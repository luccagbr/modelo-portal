import { Box } from '@mui/system';
import { Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../../contexts';
import { ReactNode } from 'react';

interface ILayoutBaseDePagina {
    titulo?: string,
    children: ReactNode;
    barraDeFerramentas?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({ children, titulo, barraDeFerramentas }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            {
                smDown &&
                <Box padding={1} display="flex" alignItems="center" gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}  >
                {smDown && 
                    <IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                </IconButton>
                }
            </Box>
            }
            
            {barraDeFerramentas && <Box>
                {barraDeFerramentas}
            </Box>}

            <Box flex="1" overflow="auto">
                {children}
            </Box>
        </Box>
    );
};