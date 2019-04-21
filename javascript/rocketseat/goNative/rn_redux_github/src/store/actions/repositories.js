export const RepositoriesRequest = () => ({
  type: "REPOSITORIES_REQUEST",
  payload: {}
});

export const RepositoriesSuccess = data => ({
  type: "REPOSITORIES_SUCCESS",
  payload: { data }
});

export const RepositoriesFailed = () => ({
  type: "REPOSITORIES_FAILED"
});
