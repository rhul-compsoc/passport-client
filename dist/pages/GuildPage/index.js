import __SNOWPACK_ENV__ from '../../../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React, {Component} from "../../../web_modules/react.js";
import {Helmet} from "../../../web_modules/react-helmet.js";
import {
  Chip,
  Col,
  Container,
  ProgressBar,
  Row,
  Select,
  Table
} from "../../../web_modules/react-materialize.js";
import {connect} from "../../../web_modules/react-redux.js";
import {xpToLevel as xpToLevel2} from "../../help/xpToLevel.js";
const mapState = (state) => ({
  auth: state.auth
});
const connector = connect(mapState);
var SortValues;
(function(SortValues2) {
  SortValues2["XP"] = "xpTotal";
  SortValues2["MESSAGES"] = "numMessages";
  SortValues2["BOOLEAN_ALGEBRA"] = "booleanScore";
})(SortValues || (SortValues = {}));
class GuildPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      sort: SortValues.XP
    };
    this.changeSort = this.changeSort.bind(this);
  }
  componentDidMount() {
    fetch(import.meta.env.SNOWPACK_PUBLIC_API_URL + "/api/guild/" + this.props.match.params.guild, {
      credentials: "include"
    }).then((data) => data.json()).then((data) => {
      this.setState({
        data
      });
    }).catch((err) => {
      console.log(err);
    });
  }
  changeSort(val) {
    this.setState({
      sort: val.target.value
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Helmet, {
      title: "Statistics"
    }), /* @__PURE__ */ React.createElement("h1", null, "Guild Statistics"), this.state.data === null && /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
      s: 12
    }, /* @__PURE__ */ React.createElement(ProgressBar, null))), this.state.data?.ok === true && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Helmet, {
      title: `Statistics for ${this.state.data.data.guildName}`
    }), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("img", {
      className: "z-depth-2",
      src: this.state.data.data.guildAvatar
    })), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h2", null, this.state.data.data.guildName))), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement("h3", null, "Options")), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
      s: 12
    }, /* @__PURE__ */ React.createElement(Select, {
      multiple: false,
      value: this.state.sort,
      onChange: this.changeSort,
      label: "Sort by"
    }, /* @__PURE__ */ React.createElement("option", {
      value: SortValues.XP
    }, "XP"), /* @__PURE__ */ React.createElement("option", {
      value: SortValues.MESSAGES
    }, "Messages"), /* @__PURE__ */ React.createElement("option", {
      value: SortValues.BOOLEAN_ALGEBRA
    }, "Boolean Algebra Score")))), /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null), /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "Name"), /* @__PURE__ */ React.createElement("th", null, "Level"), /* @__PURE__ */ React.createElement("th", null, "XP"), /* @__PURE__ */ React.createElement("th", null, "Messages"), /* @__PURE__ */ React.createElement("th", null, "Boolean Algebra Score"))), /* @__PURE__ */ React.createElement("tbody", null, this.state.data.data.leaderboard.filter((user) => user.username).sort((a, b) => b[this.state.sort] - a[this.state.sort]).map((user, i) => /* @__PURE__ */ React.createElement("tr", {
      key: user.memberIDString,
      style: {
        backgroundColor: this.props.auth.user?.connections.find((connection) => connection.id === user.memberIDString) && "rgba(0,0,0,0.04)"
      }
    }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("img", {
      className: "z-depth-1",
      style: {
        width: "4em",
        height: "4em",
        objectFit: "cover"
      },
      src: user.avatarURL || `https://cdn.discordapp.com/embed/avatars/${parseInt(user.discrim, 10) % 5}.png`
    })), /* @__PURE__ */ React.createElement("td", null, i + 1), /* @__PURE__ */ React.createElement("td", null, user.username, "#", user.discrim, user.nickname && /* @__PURE__ */ React.createElement(React.Fragment, null, " ", /* @__PURE__ */ React.createElement(Chip, {
      style: {margin: 0}
    }, user.nickname))), /* @__PURE__ */ React.createElement("td", null, xpToLevel2(user.xpTotal)), /* @__PURE__ */ React.createElement("td", null, user.xpTotal), /* @__PURE__ */ React.createElement("td", null, user.numMessages), /* @__PURE__ */ React.createElement("td", null, user.booleanScore)))))), this.state.data?.ok === false && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, this.state.data.message), /* @__PURE__ */ React.createElement("pre", {
      style: {overflowX: "scroll"}
    }, this.state.data.stack)));
  }
}
const ConnectedComponent = connector(GuildPage);
export {ConnectedComponent as GuildPage};
