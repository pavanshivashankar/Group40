import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: (props) => `${props.value} is not a valid email address!`
        },
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"]
    },
    confirmPassword: {
        type: String,
        validate: {
            validator: function(value) {
                return this.password === value;
            },
            message: "Passwords do not match",
        },
    },
    role: { type: String, enum: ['Admin', 'AnimalSpecialist', 'AnimalCaretaker', 'Employee', 'Visitor'], default: "Visitor" },
});

userSchema.pre("save", async function (next) {
    try {
        if(!this.isModified("password")){
            return next()
        }

        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();

    } catch (error) {
        next(error)
    }
})

export default model('User', userSchema);
