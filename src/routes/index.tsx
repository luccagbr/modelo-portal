import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../contexts';
import { useEffect } from 'react';
import { 
    ListagemDePessoas,
    DetalheDePessoa,
 } from '../pages/';

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'people',
                path: '/pessoas',
                label: 'Pessoas',
            },
        ]);
    }, [])

    return (
        <Routes>
            <Route path="/pessoas" element={<ListagemDePessoas/>}/>
            <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoa/>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
}