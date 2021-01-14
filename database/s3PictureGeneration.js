const axios = require('axios');

const S3_KEY = process.env.AWS_API_KEY;

axios.put(S3_KEY, (err, result) => {
  if (err) {
    return err;
  }
  return result;
});
