import React, { ChangeEvent, Component } from "react";
import { Helmet } from "react-helmet";
import {
  Chip,
  Col,
  Container,
  ProgressBar,
  Row,
  Select,
  Table,
} from "react-materialize";
import { connect, ConnectedProps } from "react-redux";
import { ApiResponse } from "../../entity/ApiResponse";
import { xpToLevel } from "../../help/xpToLevel";
import { RootState } from "../../redux/reducers";

const mapState = (state: RootState) => ({
  auth: state.auth,
});
const connector = connect(mapState);

interface DiscordUserDetails {
  avatarURL: string | null;
  booleanScore: number;
  discrim: string;
  guildId: number;
  guildIDString: string;
  memberId: number;
  memberIDString: string;
  nickname: string | null;
  numMessages: number;
  recentMessage: number;
  username: string;
  xpTotal: number;
}

interface GuildUserDetails {
  guildName: string;
  guildAvatar: string;
  guildId: number;
  guildIdString: string;
  leaderboard: DiscordUserDetails[];
}

enum SortValues {
  XP = "xpTotal",
  MESSAGES = "numMessages",
  BOOLEAN_ALGEBRA = "booleanScore",
}

interface GuildPageProps {
  match: { params: { guild: string } };
}
type Props = ConnectedProps<typeof connector> & GuildPageProps;
type State = { data: ApiResponse<GuildUserDetails> | null; sort: SortValues };

class GuildPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: null,
      sort: SortValues.XP,
    };
    this.changeSort = this.changeSort.bind(this);
  }
  componentDidMount() {
    fetch(process.env.API_URL + "/api/guild/" + this.props.match.params.guild, {
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  changeSort(val: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      sort: val.target.value as SortValues,
    });
  }
  render() {
    return (
      <Container>
        <Helmet title="Statistics" />
        <h1>Guild Statistics</h1>
        {this.state.data === null && (
          <Row>
            <Col s={12}>
              <ProgressBar />
            </Col>
          </Row>
        )}
        {this.state.data?.ok === true && (
          <>
            <Helmet
              title={`Statistics for ${this.state.data.data.guildName}`}
            />
            <Row>
              <Col>
                <img
                  className="z-depth-2"
                  src={this.state.data.data.guildAvatar}
                />
              </Col>
              <Col>
                <h2>{this.state.data.data.guildName}</h2>
              </Col>
            </Row>
            <Row>
              <h3>Options</h3>
            </Row>
            <Row>
              <Col s={12}>
                <Select
                  multiple={false}
                  value={this.state.sort}
                  onChange={this.changeSort}
                  label="Sort by"
                >
                  <option value={SortValues.XP}>XP</option>
                  <option value={SortValues.MESSAGES}>Messages</option>
                  <option value={SortValues.BOOLEAN_ALGEBRA}>
                    Boolean Algebra Score
                  </option>
                </Select>
              </Col>
            </Row>
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
                {this.state.data.data.leaderboard
                  .filter((user) => user.username)
                  .sort((a, b) => b[this.state.sort] - a[this.state.sort])
                  .map((user, i) => (
                    <tr
                      key={user.memberIDString}
                      style={{
                        backgroundColor:
                          this.props.auth.user.connections.find(
                            (connection) =>
                              connection.id === user.memberIDString
                          ) && "rgba(0,0,0,0.04)",
                      }}
                    >
                      <td>
                        <img
                          className={"z-depth-1"}
                          style={{
                            width: "4em",
                            height: "4em",
                            objectFit: "cover",
                          }}
                          src={
                            user.avatarURL ||
                            `https://cdn.discordapp.com/embed/avatars/${
                              parseInt(user.discrim, 10) % 5
                            }.png`
                          }
                        ></img>
                      </td>
                      <td>{i + 1}</td>
                      <td>
                        {user.username}#{user.discrim}
                        {user.nickname && (
                          <>
                            {" "}
                            <Chip style={{ margin: 0 }}>{user.nickname}</Chip>
                          </>
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
        {this.state.data?.ok === false && (
          <>
            <p>{this.state.data.message}</p>
            <pre className={styles.error} style={{ overflowX: "scroll" }}>
              {this.state.data.stack}
            </pre>
          </>
        )}
      </Container>
    );
  }
}

const ConnectedComponent = connector(GuildPage);
export { ConnectedComponent as GuildPage };
