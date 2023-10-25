import { TextField, Box, Button, Typography } from "@mui/material";

function Home() {
  return (
    <Box
     sx={{backgroundColor: "gray"}}
     fontFamily="roboto, sans-serif"
     component='main'
     height='100vh'
     width='100vw'
     display='flex'
     alignItems='center'
     justifyContent='center'
     >
        <Box display="flex" width="60%" minHeight="300px">
          <Box display="flex" width="60%" sx={{padding: "12px 24px", backgroundColor: "rgb(29, 155, 240)", color: "white"}} flexDirection="column" justifyContent="center">
            <Typography component="h1" variant="h4">Growtwitter</Typography>
            <p>Trabalho final do bloco intermediário</p>
            <p>O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte desta comunidade que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.</p>
          </Box>

          <Box display="flex" flexDirection="column" padding="12px" height="100%" alignItems="center" justifyContent="center" sx={{backgroundColor: "white"}} minHeight="300px">
            <Box padding="24px 12px" minWidth="70%">
              <Typography component="h2" variant="h5">Entrar no Growtwitter</Typography>
              <form>
                <TextField id="email" label="E-mail" type="email" fullWidth variant="outlined" margin="dense"/>
                <TextField id="password" label="password" type="password" fullWidth variant="outlined" margin="dense"/>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{marginY: "6px"}}
                >
                  Entrar
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default Home;