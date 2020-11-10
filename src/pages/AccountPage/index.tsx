import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Container,
  Table
} from "react-materialize";
import { connect, ConnectedProps } from "react-redux";
import { ConnectionIcon, ConnectionLabel, ConnectionUsername } from "../../components/ConnectionLabel";
import { LoginLink } from "../../components/LoginLink";
import { ClientUserConnectionPlatform } from "../../enum/ClientUserConnectionPlatform";
import type { RootState } from "../../redux/reducers";

const mapState = (state: RootState) => ({
  auth: state.auth,
});
const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;
type State = {};

class AccountPage extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Helmet title="Account" />
        <h1>Account</h1>
        <h2>Connect</h2>
        <LoginLink type={ClientUserConnectionPlatform.DISCORD}><Button>Login to Discord</Button></LoginLink>
        <LoginLink type={ClientUserConnectionPlatform.GITHUB}><Button>Login to GitHub</Button></LoginLink>
        <LoginLink type={ClientUserConnectionPlatform.MICROSOFT}><Button>Login to Microsoft</Button></LoginLink>
        <h2>Connection Details</h2>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>
                Username
              </th>
              <th>
                Name
              </th>
              <th>
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.auth.user?.connections.map((connection) => (
              <tr>
                <td>
                  <ConnectionIcon connection={connection} />
                </td>
                <td>
                  <ConnectionUsername connection={connection} />
                </td>
                <td>
                  {connection.displayName}
                </td>
                <td>
                  {connection.id}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

const ConnectedComponent = connector(AccountPage);
export { ConnectedComponent as AccountPage };
