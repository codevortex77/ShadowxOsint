export default async function handler(req, res) {
  const { key, type, term } = req.query;

  if (!key || !type || !term) {
    return res.json({ success: false, message: "Missing params" });
  }

  const upstream = `https://mynkapi.amit1100941.workers.dev/api?key=${key}&type=${type}&term=${term}`;

  const response = await fetch(upstream);
  const data = await response.json();

  data.credit = "@PurelyYour";
  data.api_by = "CodeVortex";

  res.setHeader("Cache-Control", "no-store");
  return res.json(data);
}
