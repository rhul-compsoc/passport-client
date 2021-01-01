import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Preloader,
  Row,
  Select,
  Table,
  TextInput,
} from "react-materialize";
import { RouteComponentProps } from "react-router-dom";
import { Game } from "../../../types/gql";
import { Centre } from "../../components/Centre";
import { gameName } from "../../help/gameName";

const INFO_GAMES = gql`
  query GetGuild($memberId: ID!, $guildId: ID!) {
    gameTypes
    user(memberId: $memberId, guildId: $guildId) {
      memberId
      games {
        bindingId
        gameId
        gameUsername
        gameUserId
        memberId
      }
    }
  }
`;

const INSERT_GAME = gql`
  mutation InsertGame($input: GameCreationInput!) {
    createGameConnection(input: $input) {
      bindingId
      gameId
      gameUsername
      memberId
    }
  }
`;

const DELETE_GAME = gql`
  mutation InsertGame($input: GameDeletionInput!) {
    deleteGameConnection(input: $input) {
      bindingId
    }
  }
`;

interface MatchParams {
  guildId: string;
  memberId: string;
}

const GuildGamePage = ({ match }: RouteComponentProps<MatchParams>) => {
  const [inputGame, setGame] = useState("");
  const [inputUsername, setUsername] = useState("");
  const { loading: loadingList, data } = useQuery(INFO_GAMES, {
    variables: {
      guildId: match.params.guildId,
      memberId: match.params.memberId,
    },
  });

  const [insertGame, { loading: insertLoading }] = useMutation(INSERT_GAME, {
    refetchQueries: [
      {
        query: INFO_GAMES,
        variables: {
          guildId: match.params.guildId,
          memberId: match.params.memberId,
        },
      },
    ],
  });
  const [deleteGame, { loading: deleteLoading }] = useMutation(DELETE_GAME, {
    refetchQueries: [
      {
        query: INFO_GAMES,
        variables: {
          guildId: match.params.guildId,
          memberId: match.params.memberId,
        },
      },
    ],
  });

  return (
    <Container>
      <h1>Games Library</h1>

      <h2>New Entry</h2>
      <form>
        <Row>
          <Col m={6} s={12}>
            <Select
              label="Game"
              value={inputGame}
              disabled={insertLoading}
              onChange={(e) => setGame(e.target.value)}
            >
              <option value="" disabled={true}>Select a Game</option>
              {
                data && data.gameTypes ?
                data.gameTypes.map((game: string) => <option value={game} key={game}>{gameName(game)}</option>) :
                []
              }
            </Select>
          </Col>
          <Col m={6} s={12}>
            <TextInput
              label="Username"
              value={inputUsername}
              disabled={insertLoading}
              
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
          <Col m={12} s={12}>
            <Button
              disabled={insertLoading}
              onClick={(e) => {
                if (inputGame && inputUsername) insertGame({
                  variables: {
                    input: {
                      guildId: match.params.guildId,
                      gameId: inputGame,
                      gameUsername: inputUsername,
                      memberId: match.params.memberId,
                    },
                  },
                });
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </form>

      <Table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Username</th>
            <th>UUID</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {loadingList && (
            <tr>
              <td colSpan={4}>
                <Centre>
                  <Preloader active size="big" />
                </Centre>
              </td>
            </tr>
          )}
          {data &&
            data.user &&
            data.user.games.map((game: Game) => (
              <tr key={game.bindingId}>
                <td>{gameName(game.gameId)}</td>
                <td>{game.gameUsername}</td>
                <td>{game.gameUserId}</td>
                <td>
                  <Button
                    disabled={deleteLoading}
                    onClick={() => {
                      deleteGame({
                        variables: {
                          input: {
                            bindingId: game.bindingId,
                            memberId: game.memberId,
                          },
                        },
                      });
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export { GuildGamePage };
