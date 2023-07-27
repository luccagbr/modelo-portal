import { useNavigate, useSearchParams } from "react-router-dom"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"
import { useContext, useEffect, useMemo, useState } from "react";
import { PessoasService, IListagemPessoa } from "../../shared/services/api/pessoas/PessoasService";
import { useDebounce } from "../../shared/hooks";
import { Box, Grid, Icon, IconButton, LinearProgress, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import { Environment } from "../../shared/environment";
import { BoxMain } from "../../shared/components/Box/BoxMain";
import { DataGrid, GridColDef, GridToolbarQuickFilter } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { NoRegister } from "../../shared/components/Datagrid/NoRegister";
import { useAppThemeContext } from "../../contexts";

export const ListagemDePessoas: React.FC = () => {
    const [ listRecord, setListRecord ] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const { debounce } = useDebounce();
    const navigate = useNavigate();
    const [pageSize, setPageSize] = useState<number>(10);

    const [isLoading, setIsLoading] = useState(false);

    const { themeName } = useAppThemeContext();

    const busca = useMemo(() => {
        return searchParams.get("busca") || ""
    }, [searchParams]);

    const pagina = useMemo(() => {
        return Number(searchParams.get("pagina") || "1")
    }, [searchParams]);

    const QuickSearchToolbar = () => {
        return (
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'end'}}>
                <GridToolbarQuickFilter placeholder='Digite para pesquisar' />
            </Box>
        )
    }

    const columns: GridColDef[] = [
        {
            field: "Opção",
            minWidth: 150,
            renderCell: (cellValues) => {
                return (
                    <Stack direction='row' spacing={1}>
                        <IconButton
                            onClick={() => {
                                // handleEditRegister()
                                // setIdRecord(cellValues.row.id);
                            }}
                            color='primary'
                            title='Editar'
                            aria-label='Editar registro'
                        >
                            <EditIcon />

                        </IconButton>
                        <IconButton
                            // onClick={() => handleRemoveRecord(cellValues.row.id)}
                            color='error'
                            title='Excluir'
                            aria-label='Excluir registro'
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                );
            },
        },
        {
            field: "name",
            headerName: "Nome",
            minWidth: 300,
            flex: 1,
        },
        {
            field: "email",
            headerName: "E-mail",
            minWidth: 150,
            flex: 1,
        }
    ];
    
    return (
        <LayoutBaseDePagina 
        >
            <BoxMain title="Teste">
                <Grid mt={2}>
                    <DataGrid
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 && themeName === "light" ? "row-dataGrid" : ""
                        }
                        rows={listRecord}
                        columns={columns}
                        autoHeight
                        localeText={{
                            noRowsLabel: "Nenhum registro",
                            MuiTablePagination: {
                                labelRowsPerPage: "Linhas por página",
                            },
                        }}
                        // // // onPageSizeChange={(value) => {
                        // // //     setPageSize(value);
                        // // // }}
                        // // pageSize={pageSize}
                        // rowsPerPageOptions={[10, 20, 30]}
                        components={{
                            Toolbar: QuickSearchToolbar,
                            NoRowsOverlay: () => <NoRegister message='Nenhum registro' />,
                            NoResultsOverlay: () => <NoRegister message='Nenhum registro encontrado' />,
                        }}
                        componentsProps={{
                            toolbar: {
                                quickFilterProps: { debounceMs: 300 },
                            },
                        }}
                        // disableSelectionOnClick
                        disableColumnMenu
                    />
                </Grid>
            </BoxMain>
        </LayoutBaseDePagina>
    )
}