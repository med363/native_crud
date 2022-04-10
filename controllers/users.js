module.exports = {
  GetUsers: (req, res) => {
    res.send("users work");
  },
  GetUsersByID: (req, res) => {
    res.send("users work by id ");
  },
  UpdateUsers: (req, res) => {
    res.send("users updated by id ");
  },
  AddUsers: (req, res) => {
    res.send("post work");
  },
};
