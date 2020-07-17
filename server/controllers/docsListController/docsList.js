const docsList = require('../../models/docsList');

const getAll = async (req, res) => {
  try {
    const data = await docsList.find({});
    return res.json({ data });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAll,
};
