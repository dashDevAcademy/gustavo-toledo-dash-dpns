import Dash from "dash";

const client = new Dash.Client();

const retrieveByName = (name) => {
  return client.platform.names.resolve(`${name}.dash`);
};

export const check = async (req, res) => {
  const { domain } = req.query;

  const dashres = await retrieveByName(domain);

  return res.json({
    exists: !!dashres,
  });
};
