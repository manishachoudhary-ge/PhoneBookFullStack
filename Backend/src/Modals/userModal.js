const mongoose =  require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    MobileNo: {
        type: 'Number',
        required: true
    },
    address: {
        type: 'String',
        required: true
    },
    workCategory: {
        type: 'String',
        enum: ["work", "school", "friends", "family"],
        required: true
    },
    avatar: {
        type: 'String',
        default: "null"
    }
},{timestamps: true})

module.exports = mongoose.model("Contact", UserSchema);