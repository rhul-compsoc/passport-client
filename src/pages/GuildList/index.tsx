import { gql, useQuery } from "@apollo/client";
import React from "react";
import {
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
      <h1>My Servers</h1>
      {loading && (
        <Centre>
          <Preloader active size="big" />
        </Centre>
      )}

      {data &&
        data.currentGuilds.map((guild: Guild) => (
          <Row key={guild.guildId}>
            <Col l={2} m={3} s={6}>
              <Card
                actions={[
                  <Link to={`/guild/${guild.guildId}`}>View</Link>,
                ]}
                header={<CardTitle image={guild.avatarUrl || ''} />}
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
