export default async function handler(req: any, res: any) {
  const { location } = req.query;
  const apiKey = process.env.WEATHERSTACK_API_KEY;

  if (!location) {
    return res.status(400).json({ error: 'Location is required' });
  }

  try {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`
    );
    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.info });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Server error while fetching weather data' });
  }
}
