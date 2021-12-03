const UsersModel = require("../model/users");
exports.profileController = async (id) => {
  try {
    console.log("id", id);
    await UsersModel.deleteOne({
      _id: id,
    });
    return true;
  } catch (e) {
    return false;
  }
};
