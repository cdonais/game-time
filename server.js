mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/game-time', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);
