import img from "../../public/vector_landing.svg";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Waves from "../../components/vectores";
import { IconSocial, WelcomeText } from "../../constants/Landing";
import styles from "../../styles/Landing.module.css";

const GridPresentation = () => {
  return (
    <Box sx={{ width: "100%" }} className={styles.brackground}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        padding={4}
      >
        <Grid item xs={6} display="flex" alignItems="center">
          <Box margin={5}>
            {WelcomeText.map((text, index) => (
              <div key={index}>
                <Typography
                  color="#3f3d56"
                  fontSize={text.size}
                  fontWeight={text.weight}
                  className={text.text === "Frontend Developer" && styles.span}
                >
                  {text.text}
                </Typography>
              </div>
            ))}
            {IconSocial.map((icon, index) => (
              <Button variant="text" padding={0} key={index}>
                <Link href={icon.link}>
                  <Image
                    src={icon.scr}
                    alt="Picture of the author"
                    width={40}
                    height={40}
                  />
                </Link>
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} display="flex" alignItems="center">
          <Box>
            <Image
              className={styles.img}
              src={img}
              alt="Picture of the author"
              width={700}
              height={520}
            />
          </Box>
        </Grid>
      </Grid>
      <Box marginTop={-20}>
        <Waves skills="react" />
      </Box>
    </Box>
  );
};

export default GridPresentation;
