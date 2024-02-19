import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return data && data.results.length !== 0 ? (
    // This video will have equal sides
    <video
      src={data.results[0].data[480]}
      poster={data.results[0].preview}
      controls
    ></video>
  ) : null;
};

export default GameTrailers;
