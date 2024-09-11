import express from 'express';
import dotenv from 'dotenv';
//import mongoose  from 'mongoose';
import connectDB from '../db.js';
dotenv.config();
import songRoutes from '../routes/songsRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import playedSongRoutes from '../routes/playedSongRoutes.js';
import artistRoutes from '../routes/artistRoutes.js';
import likedSongsRoutes from '../routes/likedSongsRoutes.js'
import playlistRoutes from '../routes/playlistRoutes.js'
import genreRoutes from '../routes/genreRoutes.js'
import cors from 'cors';

const app = express();
app.use(express.json())
//const router = express.Router();
//app.use(express.static('public'))
app.use(cors())
//const PORT = process.env.PORT || 7000 ;
const PORT = 7000;
//const MONGOURL = process.env.MONGO_URL
//const MONGOURL = 'mongodb+srv://locomail112:CDRZcXJ2OCg7jxFn@cluster0.yanxhub.mongodb.net/'
//console.log(process.env.PORT);

// Connect to MongoDB
connectDB();

 app.get('/',(req,res)=>{
   res.send('Hello World')
   // db.spotify.songs.find({})
 })
app.use('/api/songs',songRoutes);
app.use('/api/users', userRoutes);
app.use('/api/played',playedSongRoutes);
app.use('/api/artist',artistRoutes);
app.use('/api/liked',likedSongsRoutes);
app.use('/api/playlist',playlistRoutes);
app.use('/api/genre',genreRoutes);
/* app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      console.log(users);
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
 */
app.listen(PORT,()=>{
    console.log('app Is Listining on',PORT)
})

