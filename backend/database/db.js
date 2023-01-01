import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://user:user@cluster0.1fiy9ks.mongodb.net/mernstack?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;