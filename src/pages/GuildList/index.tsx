import { gql, useQuery } from "@apollo/client";
import React from "react";
import {
  Button,
  Card,
  CardTitle,
  Col,
  Container,
  Preloader,
  Row,
} from "react-materialize";
import { Link } from "react-router-dom";
import { Guild } from "../../../types/gql";
import { Centre } from "../../components/Centre";
import { getLoginLink } from "../../help/loginLink";

const GUILD_LIST = gql`
  query GetCurrentGuildList {
    currentGuilds {
      guildId
      avatarUrl
      guildName
    }
  }
`;

const GuildListPage = () => {
  const { loading, data } = useQuery(GUILD_LIST);

  return (
    <Container>
      <h1>Passport</h1>
      <p>
        Welcome to Passport, a service hosted by the Computing Society at Royal
        Holloway, University of London for accessing backend services.
      </p>

      {loading ? (
        <Centre>
          <Preloader active size="big" />
        </Centre>
      ) : data ? (
        <h2>Guild Information</h2>
      ) : (
        <a href={getLoginLink()}>
          <Button>Login to get started</Button>
        </a>
      )}

      {data &&
        data.currentGuilds.map((guild: Guild) => (
          <Row key={guild.guildId}>
            <Col l={2} m={3} s={6}>
              <Card
                actions={[<Link to={`/guild/${guild.guildId}`}>View</Link>]}
                header={<CardTitle image={guild.avatarUrl || ""} />}
              >
                <span className="card-title">{guild.guildName}</span>
              </Card>
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export { GuildListPage };
