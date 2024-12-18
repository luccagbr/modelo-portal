import { Box, Button, TextField, Paper, useTheme, Icon } from '@mui/material';
import React from 'react';
import { Environment } from '../../environment';
import { FlashOnRounded } from '@mui/icons-material';

interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
    textoDaBusca = '',
    mostrarInputBusca = false,
    aoMudarTextoDeBusca,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = false,
    aoClicarEmNovo
}) => {
    const theme = useTheme();

    return (
        <Box 
            height={theme.spacing(5)} 
            marginX={1} 
            padding={1} 
            paddingX={2} 
            display="flex" 
            gap={1} 
            alignItems="center"
            component={Paper}
            >

            {mostrarInputBusca && (
                <TextField 
                    size="small" 
                    placeholder={Environment.INPUT_DE_BUSCA}
                    value={textoDaBusca} 
                    onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}/>
            )}

            <Box flex={1} display="flex" justifyContent="end">
            {mostrarBotaoNovo && (
                <Button 
                variant="contained" 
                color="primary" 
                disableElevation 
                endIcon={<Icon>add</Icon>}
                onClick={aoClicarEmNovo}
                >{textoBotaoNovo}</Button> 
            )}                    
            </Box>
        </Box>
    )
}