import GhostAdminAPI from '@tryghost/admin-api';

const admin = new GhostAdminAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: 'v5.0',
});

const handler = async (event, context) => {
  try {
    const res = await admin.members.add(event.body, {
      send_email: true,
      email_type: 'subscribe',
    });
    const data = await res.json();
    return {
      statusCode: 200,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
    };
  }
};

export { handler };
