const User = require('../../models/users');

const getMyProfile = (req, res) => {
    return res.json({
        data: req.user,
    })
};

const updateMyProfile = async (req, res, next) => {
    try {
        const user = await User.updateMyProfile(req);
        return res.json({
            data: user,
        })
    }catch (e) {
        next(e)
    }
};

module.exports = {
    getMyProfile,
    updateMyProfile,
};