import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { FaPlus } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

export type SingleTableBoxSceneProps = {
  title: string;
  createPageUrl?: string;
  children: React.ReactNode;
  showCreateBtn?: boolean;

  createBtnText?: string;
  onClickCreateBtn?: () => void;
};

const SingleTableBoxScene: React.FC<SingleTableBoxSceneProps> = ({
  title,
  createPageUrl,
  children,
  showCreateBtn = true,
  createBtnText = 'Crear',
  onClickCreateBtn,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.info('You clicked a breadcrumb.');
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pb: 8,
        pt: 10,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          {/* ========= title & create btn ========= */}
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
            pb={2}
          >
            <Stack spacing={1} pb={5}>
              <Typography variant="h4">{title}</Typography>
            </Stack>

            {showCreateBtn && (
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <FaPlus />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={
                    onClickCreateBtn ||
                    (() => createPageUrl && navigate(createPageUrl))
                  }
                >
                  {createBtnText}
                </Button>
              </div>
            )}

            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb" separator="›">
                <Link color="inherit" to="/">
                  Home
                </Link>
                <Link color="inherit" to="/">
                  Consulta Microchips
                </Link>
              </Breadcrumbs>
            </div>
          </Stack>

          {/* ========= Search & Table ========= */}
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

export default SingleTableBoxScene;
