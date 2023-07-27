import { Stack } from "@mui/material";
type mensageProps = {
    message: string;
};

export function NoRegister(data: mensageProps) {
    return (
        <Stack height='100%' alignItems='center' justifyContent='center'>
            {data.message}
        </Stack>
    );
}