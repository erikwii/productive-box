export const userInfoQuery = `
  query {
    viewer {
      login
      id
    }
  }
`;

export const createContributedRepoQuery = (username: string) => `
  query {
    user(login: "${username}") {
      repositoriesContributedTo(last: 100, includeUserRepositories: true) {
        nodes {
          isFork
          name
          owner {
            login
          }
        }
      }
    }
  }
`;

export const createCommittedDateQuery = (id: string, name: string, owner: string, since: string) => `
  query {
    repository(owner: "${owner}", name: "${name}") {
      defaultBranchRef {
        target {
          ... on Commit {
            history(since: "${since}", author: { id: "${id}" }) {
              totalCount
              edges {
                node {
                  committedDate
                }
              }
            }
          }
        }
      }
    }
  }
`;
