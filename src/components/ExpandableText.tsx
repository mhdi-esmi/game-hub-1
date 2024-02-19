import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (!children) return null;
  const limit = 300;
  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="Bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {!expanded ? "Show More" : "Less More..."}
      </Button>
    </Text>
  );
};
