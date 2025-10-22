const userModal = require("../Modals/userModal");

const UserCreate = async (req, res) => {
  try {
    const { name, MobileNo, address, workCategory , avatar} = req.body;
    // console.log({ name, MobileNo, address, workCategory });
    console.log(req.body);

    if (!name || !MobileNo || !address || !workCategory || !avatar) {
      return res.status(400).json({ error: "all fields are required" });
    }

    const data = new userModal({ name, MobileNo, address, workCategory , avatar});
    const savedData = await data.save();

    if (!savedData) {
      return res.status(400).json({ error: "data not saved" });
    }

    return res.status(200).json({ Message: "data saved successfully",data: savedData });

  } catch (error) {
    console.error(error); 
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params; 
        if (!id) {
            return res.status(400).json({ message: "id not provided" });
        }
        const updatedUser = await userModal.findByIdAndUpdate( id,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({
            message: "User updated successfully",  updatedUser
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error while updating the user" });
    }
};

const deleteUser = async (req,res) =>{
    try{
    const {id} = req.params;
    if (!id) {
            return res.status(400).json({ message: "id not provided" });
        }
        const deletedUser = await userModal.findByIdAndDelete( id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User deleted successfully"
        });
        }catch(error) {
            console.error(error);
        return res.status(500).json({ message: "an error while deleting" });
        }

};

const listUser = async (req,res)=>{
    try{
        const users = await userModal.find();

        if(!users) {
            return res.status(400).json({Message: "no user Found"});
        }
        return res.status(200).json({
            message: "User fetched successfully",
            user: users
        });

    }catch(error){
        console.error(error);
        return res.status(500).json({ message: "an error while displaying" });
    }
}




module.exports = { UserCreate, updateUser, deleteUser, listUser };



