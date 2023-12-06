const mongoose = require('mongoose');
const { Schema } = mongoose;

const validator = require('validator');
const bcrypt = require('bcrypt');

// Create a new schema for the authentication model
const AuthSchema = new Schema({
    name: {
        type: String // Define the 'name' field as a string
    },
    email: {
        type: String, // Define the 'email' field as a string
        unique: true // Ensure that each email is unique in the database
    },
    password: {
        type: String // Define the 'password' field as a string
    }
});
// static method for signUp
AuthSchema.statics.signUp = async function(name,email,password){
        // Set password options
    const passwordOptions = {
        minLength: 3,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        returnScore: false,
        pointsPerUnique: 0,
        pointsPerRepeat: 0,
        pointsForContainingLower: 0,
        pointsForContainingUpper: 0,
        pointsForContainingNumber: 0,
        pointsForContainingSymbol: 0
      };
 // Check if name, email, and password are provided
    if(!name || !email || !password){
     throw Error("All fields are mandatory");
    }
        // Check if email is valid
    if(!validator.isEmail(email)){
        throw Error("Invalid Email");
    }
        // Check if email already exists
    const emailExist = await this.findOne({email});
    if(emailExist){
        throw Error("Email already exist");
    }
        // Check if password is strong
    if(!validator.isStrongPassword(password, passwordOptions)){
        throw Error("Password is weak");
    }
    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    // Create user with hashed password
    const user = await this.create({name,email,password:hash});
    return user;
}
// static method for logIn
AuthSchema.statics.logIn = async function(email,password){
        // Check if email and password are provided
    if(!email || !password){
        throw Error("All fields are mandatory");
    }
        // Find a user with the provided email
    const user = await this.findOne({email});
        // If no user is found with the provided email, throw an error
    if(!user){
        throw Error("Invalid Email");
    }
        // Compare the provided password with the user's password using bcrypt
    const match = await bcrypt.compare(password, user.password);
        // If the passwords do not match, throw an error
    if(!match){
        throw Error("Invalid Password");
    }
    return user;
}
module.exports = mongoose.model("user", AuthSchema);