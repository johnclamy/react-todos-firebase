const isSearched = term => item =>
  !term || item.task.toLowerCase().includes(term.toLowerCase())

const fetchData = async (url, setData, setError, setIsLoading) => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw Error("Data not received for server");
    }
    const rslt = await resp.json();
    setData(rslt);
    setError('');
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false)
  }
};

export {
  fetchData,
  isSearched,
};