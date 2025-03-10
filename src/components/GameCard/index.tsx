import { PlayArrow } from "@mui/icons-material"
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography
} from "@mui/material"
import { green, grey } from "@mui/material/colors"
import { useRouter } from "next/router"
import { FC, useState } from "react"
import { Game } from "../../interfaces/Game"

interface GameCardProps {
  game: Game
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  const router = useRouter()
  const [readMore, setReadMore] = useState(false)

  return (
    <Card>
      <Stack
        justifyContent="end"
        height={140}
        sx={{
          background: `url(${game.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 140 / 2,
            width: "100%",
            background: `linear-gradient(to top, ${grey[900]}, transparent)`
          }
        }}
      >
        <Stack
          zIndex={1}
          direction="row"
          position="relative"
          px={2}
          alignItems="center"
          justifyContent="space-between"
          bottom={-20}
        >
          <Typography variant="h5" component="div">
            {game.name}
          </Typography>

          <IconButton
            sx={{
              background: green[500],
              "&:hover": {
                background: green[600]
              },
              width: 40,
              height: 40
            }}
            onClick={() => router.push("/car")}
          >
            <PlayArrow />
          </IconButton>
        </Stack>
      </Stack>

      <CardContent sx={{ pt: 4 }}>
        <Typography variant="body2" color="text.secondary">
          {game.description.length >= 100 && !readMore
            ? `${game.description.substring(0, 100)}...`
            : game.description}{" "}
          {!readMore && game.description.length >= 100 && (
            <Typography
              component="span"
              variant="body2"
              fontWeight="bold"
              sx={{ cursor: "pointer" }}
              onClick={() => setReadMore(true)}
            >
              Ler mais
            </Typography>
          )}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default GameCard
