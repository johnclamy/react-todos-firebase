const TODOS_API_URL = "http://localhost:3500/todos";

const setOption = (method, data) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

const fetchData = async (setData, setError, setIsLoading) => {
  try {
    const resp = await fetch(TODOS_API_URL);
    if (!resp.ok) {
      throw Error("Data not received for server");
    }
    const rslt = await resp.json();
    setData(rslt);
    setError("");
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};

const requestData = async (option = null, error = "") => {
  try {
    const resp = await fetch(TODOS_API_URL, option);
    if (!resp.ok) {
      throw Error('Please reload the app')
    }
  } catch (err) {
      error = err.message
  } finally {
    return error;
  }
};

export {
  fetchData,
  requestData,
  setOption
};
