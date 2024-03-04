import React, { useState } from "react";
import {
  Anchor,
  Avatar,
  Button,
  Grid,
  Group,
  Paper,
  rem,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconAt,
  IconPhoneCall,
  IconStar,
  IconTrash,
  IconUserPlus,
  IconWorld,
} from "@tabler/icons-react";
import { IMAGEBASEURL } from "../../constants";

interface UserCard {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  onDelete: (userId: number) => void;
}

const UserCard: React.FC<UserCard> = ({
  id,
  name,
  email,
  phone,
  website,
  onDelete,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const toggleFollowState = () => {
    setIsFollowing((prevValue) => !prevValue);
  };
  return (
    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
      <Paper shadow="md" p="lg" radius="md" withBorder>
        <Tooltip label={name}>
          <Avatar
            mr="auto"
            ml="auto"
            size={rem("7.5rem")}
            radius={rem("7.5rem")}
            src={`${IMAGEBASEURL}${name}`}
            alt={name}
            component="a"
            href="https://hildegard.org"
            target="_blank"
          />
        </Tooltip>
        <Text size="lg" ta="center" fw={500} mt="md">
          {name} {isFollowing && <IconStar size={"1rem"} stroke={2} />}
        </Text>
        <Group wrap="nowrap" mt={rem("0.3125rem")} gap={rem("0.3125rem")}>
          <IconAt size={"1rem"} color="grey" stroke={1.5} />
          <Anchor
            c="dimmed"
            size="md"
            underline="hover"
            href={`mailto:${email}`}
            target="_blank"
          >
            {email}
          </Anchor>
        </Group>
        <Group wrap="nowrap" mt={rem("0.3125rem")} gap={rem("0.3125rem")}>
          <IconPhoneCall size={"1rem"} color="grey" stroke={1.5} />
          <Anchor
            c="dimmed"
            size="md"
            underline="hover"
            href={`tel:${phone}`}
            target="_blank"
          >
            {phone}
          </Anchor>
        </Group>
        <Group wrap="nowrap" mt={rem("0.3125rem")} gap={rem("0.3125rem")}>
          <IconWorld size={"1rem"} color="grey" stroke={1.5} />
          <Anchor
            c="dimmed"
            size="md"
            underline="hover"
            href={`https://${website}`}
            target="_blank"
          >
            {website}
          </Anchor>
        </Group>
        <Group wrap="nowrap" mt={rem("0.9375rem")} gap={rem("0.3125rem")}>
          <Button
            fullWidth
            variant={isFollowing ? "default" : "primary"}
            leftSection={<IconUserPlus size={"1rem"} />}
            onClick={toggleFollowState}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
          <Button
            fullWidth
            variant="outline"
            leftSection={<IconTrash size={"1rem"} />}
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </Group>
      </Paper>
    </Grid.Col>
  );
};

export default UserCard;
