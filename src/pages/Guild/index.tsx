import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button, Chip, Container, Preloader, Table } from "react-materialize";
import { Link, RouteComponentProps } from "react-router-dom";
import { Guild, User } from "../../../types/gql";
import { Centre } from "../../components/Centre";
import { combineStyles } from "../../help/combineStyles";
import { defaultAvatar } from "../../help/defaultAvatar";
import { xpToLevel } from "../../help/xpToLevel";
import styles from "./index.module.scss";

const GUILD_INFO = gql`
  query GetGuild($guildId: ID!) {
    currentUser {
      memberId
    }
    guild(guildId: $guildId) {
      guildName
      users {
        memberId
        username
        nickname
        discrim
        avatarUrl
        xpTotal
        booleanScore
        numMessages
      }
    }
  }
`;

interface MatchParams {
  guildId: string;
}

type Measures = keyof User;

const GuildPage = ({ match }: RouteComponentProps<MatchParams>) => {
  const { loading, data } = useQuery(GUILD_INFO, {
    variables: {
      guildId: match.params.guildId,
    },
  });
  const guild = data?.guild as Guild;

  const [measure, setMeasure] = useState<Measures>("numMessages");

  return (
    <Container>
      {loading && (
        <Centre>
          <Preloader active size="big" />
        </Centre>
      )}

      {data && (
        <>
          <h1>{guild.guildName}</h1>

          {/* <h2>Options</h2>
          <Link to={`/guild/${match.params.guildId}/games`}><Button>Manage Game Connections</Button></Link> */}

          <h2>Leaderboard</h2>
          <Button onClick={() => setMeasure("xpTotal")}>Sort by XP</Button>
          <Button onClick={() => setMeasure("numMessages")}>
            Sort by Messages
          </Button>
          <Button onClick={() => setMeasure("booleanScore")}>
            Sort by Boolean Algebra Score
          </Button>

          <Table>
            <thead>
              <tr>
                <th></th>
                <th>#</th>
                <th>Name</th>
                <th>Level</th>
                <th>XP</th>
                <th>Messages</th>
                <th>Boolean Algebra Score</th>
              </tr>
            </thead>
            <tbody>
              {/* Need to clone the array for some reason */}
              {[...guild.users]
                .sort((a, b) => (a[measure] > b[measure] ? -1 : 1))
                .map((user, index) => (
                  <tr
                    key={user.memberId}
                    className={combineStyles(
                      data.currentUser.memberId === user.memberId && styles.you
                    )}
                  >
                    <td>
                      <img
                        src={
                          user.avatarUrl ||
                          defaultAvatar(user.discrim) ||
                          defaultAvatar(user.memberId)
                        }
                        className={styles.avatar}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>
                      {user.username}#{user.discrim}{" "}
                      {user.nickname && (
                        <Chip className={styles.chip}>{user.nickname}</Chip>
                      )}
                    </td>
                    <td>{xpToLevel(user.xpTotal)}</td>
                    <td>{user.xpTotal}</td>
                    <td>{user.numMessages}</td>
                    <td>{user.booleanScore}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export { GuildPage };
