"use client";
import { useEffect, useState } from "react";
import { Grid } from "@mantine/core";
import UserCard from "./components/UserCard";
import { APIURL } from "../constants";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function HomePage() {
  const [data, setData] = useState<User[]>([]);

  const deleteUser = (userId: number) => {
    const updatedUsers = data.filter((user) => user.id !== userId);
    setData(updatedUsers);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APIURL);
        const data = await response.json();
        const transformedData = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          website: user.website,
        }));
        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid gutter="md" m={"lg"}>
      {data.map((user, index) => (
        <UserCard key={user.id} {...user} onDelete={deleteUser} />
      ))}
    </Grid>
  );
}
