import { useQuery, gql } from '@apollo/client';
import React from 'react';

const USER_DETAILS = gql`
  query GetCurrentUserDetails($guildId: ID!) {
    user (guildId: $guildId) {
      username
      memberId
    }
  }
`

const Header = () => {
  const { loading, error, data } = useQuery(USER_DETAILS, {
    variables: {
      guildId: process.env.DEFAULT_GUILD
    }
  })

  if (loading) return <p>loading</p>
  if (error) return <p>Error! {JSON.stringify(error, null, 2)}</p>
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export { Header }
