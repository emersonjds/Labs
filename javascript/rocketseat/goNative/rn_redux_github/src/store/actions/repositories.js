export const repositoriesRequest = () => ({
  type: "REPOSITORIES_REQUEST"
});

export const repositoriesSuccess = data => ({
  type: "REPOSITORIES_SUCCESS",
  payload: { data }
});

export const repositoriesFailed = () => ({
  type: "REPOSITORIES_FAILED"
});
